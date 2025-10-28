import { Request, Response, NextFunction } from 'express';
import Section from '../models/Section';
import { AppError } from '../middleware/errorHandler';

export const getAllSections = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { pageSlug, isVisible } = req.query;
    const filter: any = {};

    if (pageSlug) filter.pageSlug = pageSlug;
    if (isVisible !== undefined) filter.isVisible = isVisible === 'true';

    const sections = await Section.find(filter).sort({ order: 1 });

    res.json({
      status: 'success',
      results: sections.length,
      data: { sections },
    });
  } catch (error) {
    next(error);
  }
};

export const getSection = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { pageSlug, sectionKey } = req.params;
    const section = await Section.findOne({ pageSlug, sectionKey });

    if (!section) {
      throw new AppError('Section not found', 404);
    }

    res.json({
      status: 'success',
      data: { section },
    });
  } catch (error) {
    next(error);
  }
};

export const createSection = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const section = await Section.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { section },
    });
  } catch (error) {
    next(error);
  }
};

export const updateSection = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { pageSlug, sectionKey } = req.params;
    const section = await Section.findOneAndUpdate(
      { pageSlug, sectionKey },
      req.body,
      { new: true, runValidators: true }
    );

    if (!section) {
      throw new AppError('Section not found', 404);
    }

    res.json({
      status: 'success',
      data: { section },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSection = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { pageSlug, sectionKey } = req.params;
    const section = await Section.findOneAndDelete({ pageSlug, sectionKey });

    if (!section) {
      throw new AppError('Section not found', 404);
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
