import { Request, Response, NextFunction } from 'express';
import Page from '../models/Page';
import { AppError } from '../middleware/errorHandler';

export const getAllPages = async (
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

    const pages = await Page.find(filter).sort({ updatedAt: -1 });

    res.json({
      status: 'success',
      results: pages.length,
      data: { pages },
    });
  } catch (error) {
    next(error);
  }
};

export const getPage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });

    if (!page) {
      throw new AppError('Page not found', 404);
    }

    res.json({
      status: 'success',
      data: { page },
    });
  } catch (error) {
    next(error);
  }
};

export const createPage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const page = await Page.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { page },
    });
  } catch (error) {
    next(error);
  }
};

export const updatePage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const page = await Page.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true, runValidators: true }
    );

    if (!page) {
      throw new AppError('Page not found', 404);
    }

    res.json({
      status: 'success',
      data: { page },
    });
  } catch (error) {
    next(error);
  }
};

export const deletePage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const page = await Page.findOneAndDelete({ slug: req.params.slug });

    if (!page) {
      throw new AppError('Page not found', 404);
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
