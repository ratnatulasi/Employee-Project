import { Router } from 'express';
import { EmployeeController } from '../controllers/employee.controller';

const router = Router();

const employeeController = new EmployeeController();
router.get('/', employeeController.getAllEmployees);
router.get('/getempNo', employeeController.getEmployeeById);
router.post('/add', employeeController.createEmployee);
router.put('/:empNo', employeeController.updateEmployee);
router.delete('/:empNo', employeeController.deleteEmployee);

export default router;
