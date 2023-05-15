import { Request, Response } from 'express';
import { SalaryService } from '../service/salary.service';
import { Salary } from '../entity/Salary';

export class SalaryController {
  private readonly salaryService: SalaryService = new SalaryService();

  public getAllSalaries = async (req: Request, res: Response) => {
    const salaries = await this.salaryService.getAllSalaries();
    res.send(salaries);
  };

  public getSalaryByEmpNo = async (req: Request, res: Response) => {
    const empNo = parseInt(req.params.empNo);
    const salary = await this.salaryService.getSalaryByEmpNo(empNo);
    if (salary) {
      res.send(salary);
    } else {
      res.status(404).send('Salary not found');
    }
  };

  public createSalary = async (req: Request, res: Response) => {
    const salary: Salary = req.body;
    const createdSalary = await this.salaryService.createSalary(salary);
    res.send(createdSalary);
  };

  public updateSalary = async (req: Request, res: Response) => {
    const id = req.params.id;
    const fromDate = req.params.fromDate;
    const salary: Salary = req.body;
    const updatedSalary = await this.salaryService.updateSalary(id, fromDate, salary);
    if (updatedSalary) {
      res.send(updatedSalary);
    } else {
      res.status(404).send('Salary not found');
    }
  };

  public deleteSalary = async (req: Request, res: Response) => {
    const id = req.params.id;
    const deletedSalary = await this.salaryService.deleteSalary(id);
    if (deletedSalary) {
      res.send(deletedSalary);
    } else {
      res.status(404).send('Salary not found');
    }
  };
}
