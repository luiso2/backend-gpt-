import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import { generateToken } from '../utils/jwt';
import { AppError } from '../middleware/errorHandler';

// Extend Express Request type for user property
interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new AppError('Email already registered', 400);
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = generateToken({
      id: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    res.status(201).json({
      status: 'success',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      throw new AppError('Invalid credentials', 401);
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new AppError('Invalid credentials', 401);
    }

    if (!user.isActive) {
      throw new AppError('Account is deactivated', 403);
    }

    const token = generateToken({
      id: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    res.json({
      status: 'success',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await User.findById(req.user?.id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    res.json({
      status: 'success',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          isActive: user.isActive,
          createdAt: user.createdAt,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
