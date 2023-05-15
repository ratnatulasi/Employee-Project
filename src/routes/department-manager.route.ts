import { Router } from 'express';
import { DepartmentManagerController } from '../controllers/department-manager.controller';

const router = Router();

const departmentManagerController = new DepartmentManagerController();
router.get('', departmentManagerController.getAllDepartmentManagers);
router.get('/:id', departmentManagerController.getDepartmentManagerById);
router.post('', departmentManagerController.createDepartmentManager);
router.put('/:id', departmentManagerController.updateDepartmentManager);
router.delete('/:id', departmentManagerController.deleteDepartmentManager);

export default router;
