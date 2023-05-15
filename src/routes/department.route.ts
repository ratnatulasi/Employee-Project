import { Router } from 'express';
import { DepartmentController } from '../controllers/department.controller';

const router = Router();

const departmentController = new DepartmentController();
router.get('', departmentController.getAllDepartments);
router.get('/:deptNo', departmentController.getDepartmentById);
router.post('', departmentController.createDepartment);
router.put('/:deptNo', departmentController.updateDepartment);
router.delete('/:deptNo', departmentController.deleteDepartment);

export default router;
