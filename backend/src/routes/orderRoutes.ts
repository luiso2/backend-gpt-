import { Router } from 'express';
import {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrderStatus,
} from '../controllers/orderController';

const router = Router();

// All routes are public
router.get('/', getAllOrders);
router.get('/:id', getOrder);
router.post('/', createOrder);
router.patch('/:id/status', updateOrderStatus);

export default router;
