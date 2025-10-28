import { Router } from 'express';
import {
  getAllServices,
  getService,
  createService,
  updateService,
  deleteService,
} from '../controllers/serviceController';

const router = Router();

router.get('/', getAllServices);
router.get('/:id', getService);
router.post('/', createService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

export default router;
