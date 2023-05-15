import { Request, Response } from 'express';
import { DepartmentEmployeeService } from '../service/department-employee.service';
import { DepartmentEmployee } from '../entity/DepartmentEmployee';

export class DepartmentEmployeeController {
  private readonly departmentEmployeeService: DepartmentEmployeeService = new DepartmentEmployeeService();

  public getAllDepartmentEmployees = async (req: Request, res: Response) => {
    const departmentEmployees = await this.departmentEmployeeService.getAllDepartmentEmployees();
    res.send(departmentEmployees);
  };

  public getDepartmentEmployeeById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const departmentEmployee = await this.departmentEmployeeService.getDepartmentEmployeeById(id);
    if (departmentEmployee) {
      res.send(departmentEmployee);
    } else {
      res.status(404).send('Department employee not found');
    }
  };

  public createDepartmentEmployee = async (req: Request, res: Response) => {
    const departmentEmployee: DepartmentEmployee = req.body;
    const createdDepartmentEmployee = await this.departmentEmployeeService.createDepartmentEmployee(departmentEmployee);
    res.send(createdDepartmentEmployee);
  };

  public updateDepartmentEmployee = async (req: Request, res: Response) => {
    const id = req.params.id;
    const departmentEmployee: DepartmentEmployee = req.body;
    const updatedDepartmentEmployee = await this.departmentEmployeeService.updateDepartmentEmployee(id, departmentEmployee);
    if (updatedDepartmentEmployee) {
      res.send(updatedDepartmentEmployee);
    } else {
      res.status(404).send('Department employee not found');
    }
  };

  public deleteDepartmentEmployee = async (req: Request, res: Response) => {
    const id = req.params.id;
    const deletedDepartmentEmployee = await this.departmentEmployeeService.deleteDepartmentEmployee(id);
    if (deletedDepartmentEmployee) {
      res.send(deletedDepartmentEmployee);
    } else {
      res.status(404).send('Department employee not found');
    }
  };
}
