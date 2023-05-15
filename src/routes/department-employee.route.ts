import { Router } from 'express';
import { DepartmentEmployeeController } from '../controllers/department-employee.controller';


const router = Router();

const departmentEmployeeController = new DepartmentEmployeeController();
router.get('', departmentEmployeeController.getAllDepartmentEmployees);
router.get('/:id', departmentEmployeeController.getDepartmentEmployeeById);
router.post('', departmentEmployeeController.createDepartmentEmployee);
router.put('/:id', departmentEmployeeController.updateDepartmentEmployee);
router.delete('/:id', departmentEmployeeController.deleteDepartmentEmployee);

export default router;
