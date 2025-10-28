import { Request, Response, NextFunction } from 'express';
import Service from '../models/Service';
import { AppError } from '../middleware/errorHandler';

export const getAllServices = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { isActive } = req.query;
    const filter: any = {};

    if (isActive !== undefined) {
      filter.isActive = isActive === 'true';
    }

    const services = await Service.find(filter).sort({ order: 1 });

    res.json({
      status: 'success',
      results: services.length,
      data: { services },
    });
  } catch (error) {
    next(error);
  }
};

export const getService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      throw new AppError('Service not found', 404);
    }

    res.json({
      status: 'success',
      data: { service },
    });
  } catch (error) {
    next(error);
  }
};

export const createService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const service = await Service.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { service },
    });
  } catch (error) {
    next(error);
  }
};

export const updateService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!service) {
      throw new AppError('Service not found', 404);
    }

    res.json({
      status: 'success',
      data: { service },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      throw new AppError('Service not found', 404);
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
