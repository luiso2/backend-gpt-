import { Router } from 'express';
import {
  getAllPages,
  getPage,
  createPage,
  updatePage,
  deletePage,
} from '../controllers/pageController';

const router = Router();

router.get('/', getAllPages);
router.get('/:slug', getPage);
router.post('/', createPage);
router.put('/:slug', updatePage);
router.delete('/:slug', deletePage);

export default router;
