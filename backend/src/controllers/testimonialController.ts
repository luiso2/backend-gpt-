import { Request, Response, NextFunction } from 'express';
import Testimonial from '../models/Testimonial';
import { AppError } from '../middleware/errorHandler';

export const getAllTestimonials = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { isPublished } = req.query;
    const filter: any = {};

    if (isPublished !== undefined) {
      filter.isPublished = isPublished === 'true';
    }

    const testimonials = await Testimonial.find(filter).sort({ order: 1, createdAt: -1 });

    res.json({
      status: 'success',
      results: testimonials.length,
      data: { testimonials },
    });
  } catch (error) {
    next(error);
  }
};

export const getTestimonial = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      throw new AppError('Testimonial not found', 404);
    }

    res.json({
      status: 'success',
      data: { testimonial },
    });
  } catch (error) {
    next(error);
  }
};

export const createTestimonial = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const testimonial = await Testimonial.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { testimonial },
    });
  } catch (error) {
    next(error);
  }
};

export const updateTestimonial = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!testimonial) {
      throw new AppError('Testimonial not found', 404);
    }

    res.json({
      status: 'success',
      data: { testimonial },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTestimonial = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!testimonial) {
      throw new AppError('Testimonial not found', 404);
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
