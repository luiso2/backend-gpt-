import { Router } from 'express';
import {
  getAllConfigs,
  getConfig,
  createConfig,
  updateConfig,
  deleteConfig,
} from '../controllers/siteConfigController';

const router = Router();

router.get('/', getAllConfigs);
router.get('/:key', getConfig);
router.post('/', createConfig);
router.put('/:key', updateConfig);
router.delete('/:key', deleteConfig);

export default router;
