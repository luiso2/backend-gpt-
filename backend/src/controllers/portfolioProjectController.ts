import { Request, Response, NextFunction } from 'express';
import PortfolioProject from '../models/PortfolioProject';
import { AppError } from '../middleware/errorHandler';

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { category, isFeatured, isPublished } = req.query;
    const filter: any = {};

    if (category) filter.category = category;
    if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true';
    if (isPublished !== undefined) filter.isPublished = isPublished === 'true';

    const projects = await PortfolioProject.find(filter).sort({ order: 1, createdAt: -1 });

    res.json({
      status: 'success',
      results: projects.length,
      data: { projects },
    });
  } catch (error) {
    next(error);
  }
};

export const getProject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const project = await PortfolioProject.findById(req.params.id);

    if (!project) {
      throw new AppError('Project not found', 404);
    }

    res.json({
      status: 'success',
      data: { project },
    });
  } catch (error) {
    next(error);
  }
};

export const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const project = await PortfolioProject.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { project },
    });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const project = await PortfolioProject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      throw new AppError('Project not found', 404);
    }

    res.json({
      status: 'success',
      data: { project },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const project = await PortfolioProject.findByIdAndDelete(req.params.id);

    if (!project) {
      throw new AppError('Project not found', 404);
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
