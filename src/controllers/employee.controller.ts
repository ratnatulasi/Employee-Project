import { Request, Response } from 'express';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../entity/Employee';

export class EmployeeController {
  private readonly employeeService: EmployeeService = new EmployeeService();

  public getAllEmployees = async (req: Request, res: Response) => {
    const employees = await this.employeeService.getAllEmployees();
    res.send(employees);
  };

  public getEmployeeById = async (req: Request, res: Response) => {
   //const empNo:string|undefined= (req.query as any)?.empNo;
   //const Id:number= parseInt(empNo?empNo:"1")
   const Id = parseInt(req.params.empNo);
    const employee = await this.employeeService.getEmployeeById(Id);
    if (employee) {
      res.send(employee);
    } else {
      res.status(404).send('Employee not found');
    }
  };

  public createEmployee = async (req: Request, res: Response) => {
    const employee: Employee = req.body;
    const createdEmployee = await this.employeeService.createEmployee(employee);
    res.send(createdEmployee);
  };

  public updateEmployee = async (req: Request, res: Response) => {
    const id = parseInt(req.params.empNo);
    const employee: Employee = req.body;
    const updatedEmployee = await this.employeeService.updateEmployee(id, employee);
    if (updatedEmployee) {
      res.send(updatedEmployee);
    } else {
      res.status(404).send('Employee not found');
    }
  };

  public deleteEmployee = async (req: Request, res: Response) => {
    const id = parseInt(req.params.empNo);
    const deletedEmployee = await this.employeeService.deleteEmployee(id);
    if (deletedEmployee) {
      res.send(deletedEmployee);
    } else {
      res.status(404).send('Employee not found');
    }
  };
}
