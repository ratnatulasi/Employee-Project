import { Router } from 'express';
import { SalaryController } from '../controllers/salary.controller';

const router = Router();


const salaryController = new SalaryController();
router.get('', salaryController.getAllSalaries);
router.get('/getempNo', salaryController.getSalaryByEmpNo);
router.post('', salaryController.createSalary);
router.put('/:id', salaryController.updateSalary);
router.delete('/:id', salaryController.deleteSalary);

export default router;
