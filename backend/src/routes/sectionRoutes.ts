import { Router } from 'express';
import {
  getAllSections,
  getSection,
  createSection,
  updateSection,
  deleteSection,
} from '../controllers/sectionController';

const router = Router();

router.get('/', getAllSections);
router.get('/:pageSlug/:sectionKey', getSection);
router.post('/', createSection);
router.put('/:pageSlug/:sectionKey', updateSection);
router.delete('/:pageSlug/:sectionKey', deleteSection);

export default router;
