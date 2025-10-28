import { Request, Response, NextFunction } from 'express';
import SiteConfig from '../models/SiteConfig';
import { AppError } from '../middleware/errorHandler';

export const getAllConfigs = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const configs = await SiteConfig.find().sort({ key: 1 });

    res.json({
      status: 'success',
      results: configs.length,
      data: { configs },
    });
  } catch (error) {
    next(error);
  }
};

export const getConfig = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const config = await SiteConfig.findOne({ key: req.params.key });

    if (!config) {
      throw new AppError('Config not found', 404);
    }

    res.json({
      status: 'success',
      data: { config },
    });
  } catch (error) {
    next(error);
  }
};

export const createConfig = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const config = await SiteConfig.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { config },
    });
  } catch (error) {
    next(error);
  }
};

export const updateConfig = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const config = await SiteConfig.findOneAndUpdate(
      { key: req.params.key },
      req.body,
      { new: true, runValidators: true, upsert: true }
    );

    res.json({
      status: 'success',
      data: { config },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteConfig = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const config = await SiteConfig.findOneAndDelete({ key: req.params.key });

    if (!config) {
      throw new AppError('Config not found', 404);
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
