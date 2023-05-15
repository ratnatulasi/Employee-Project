import { Router } from 'express';
import { TitleController } from '../controllers/title.controller';

const router = Router();

const titleController = new TitleController();
router.get('', titleController.getAllTitles);
router.get('/:empNo', titleController.getTitleByEmpNo);
router.post('', titleController.createTitle);
router.put('/:id', titleController.updateTitle);
router.delete('/:id', titleController.deleteTitle);

export default router;
