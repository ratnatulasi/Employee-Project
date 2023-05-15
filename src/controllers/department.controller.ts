import { Request, Response } from 'express';
import { DepartmentService } from '../service/department.service';
import { Department } from '../entity/Department';

export class DepartmentController {
  private readonly departmentService: DepartmentService = new DepartmentService();

  public getAllDepartments = async (req: Request, res: Response) => {
    const departments = await this.departmentService.getAllDepartments();
    res.send(departments);
  };

  public getDepartmentById = async (req: Request, res: Response) => {
    const deptNo = parseInt(req.params.deptNo);
    const department = await this.departmentService.getDepartmentById(deptNo);
    if (department) {
      res.send(department);
    } else {
      res.status(404).send('Department not found');
    }
  };

  public createDepartment = async (req: Request, res: Response) => {
    const department: Department = req.body;
    const createdDepartment = await this.departmentService.createDepartment(department);
    res.send(createdDepartment);
  };

  public updateDepartment = async (req: Request, res: Response) => {
    const deptNo = parseInt(req.params.deptNo);
    const department: Department = req.body;
    const updatedDepartment = await this.departmentService.updateDepartment(deptNo, department);
    if (updatedDepartment) {
      res.send(updatedDepartment);
    } else {
      res.status(404).send('Department not found');
    }
  };

  public deleteDepartment = async (req: Request, res: Response) => {
    const deptNo = parseInt(req.params.deptNo);
    const deletedDepartment = await this.departmentService.deleteDepartment(deptNo);
    if (deletedDepartment) {
      res.send(deletedDepartment);
    } else {
      res.status(404).send('Department not found');
    }
  };
}
