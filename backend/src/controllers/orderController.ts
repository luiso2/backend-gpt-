import { Request, Response, NextFunction } from 'express';
import Order from '../models/Order';
import Product from '../models/Product';
import { AppError } from '../middleware/errorHandler';

export const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId } = req.query;
    const filter: any = {};

    if (userId) {
      filter.user = userId;
    }

    const orders = await Order.find(filter)
      .populate('user', 'name email')
      .populate('items.product', 'name price')
      .sort({ createdAt: -1 });

    res.json({
      status: 'success',
      results: orders.length,
      data: { orders },
    });
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email')
      .populate('items.product', 'name price');

    if (!order) {
      throw new AppError('Order not found', 404);
    }

    res.json({
      status: 'success',
      data: { order },
    });
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { items, paymentMethod, shippingAddress, userId } = req.body;

    if (!items || items.length === 0) {
      throw new AppError('Order must contain at least one item', 400);
    }

    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findById(item.product);

      if (!product) {
        throw new AppError(`Product ${item.product} not found`, 404);
      }

      if (!product.isActive) {
        throw new AppError(`Product ${product.name} is not available`, 400);
      }

      if (product.stock < item.quantity) {
        throw new AppError(
          `Insufficient stock for ${product.name}. Available: ${product.stock}`,
          400
        );
      }

      orderItems.push({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
      });

      totalAmount += product.price * item.quantity;

      product.stock -= item.quantity;
      await product.save();
    }

    const order = await Order.create({
      user: userId,
      items: orderItems,
      totalAmount,
      paymentMethod,
      shippingAddress,
    });

    res.status(201).json({
      status: 'success',
      data: { order },
    });
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { status, paymentStatus } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      throw new AppError('Order not found', 404);
    }

    if (status) order.status = status;
    if (paymentStatus) order.paymentStatus = paymentStatus;

    await order.save();

    res.json({
      status: 'success',
      data: { order },
    });
  } catch (error) {
    next(error);
  }
};
