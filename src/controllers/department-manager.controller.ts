import { Request, Response } from 'express';
import { DepartmentManager } from '../entity/DepartmentManager';
import { DepartmentManagerService } from '../service/department-manager.service';


export class DepartmentManagerController{
    private readonly departmentManagerService: DepartmentManagerService = new DepartmentManagerService();

    public getAllDepartmentManagers = async (req: Request, res: Response): Promise<void> => {
      const departmentManagers = await this.departmentManagerService.getAllDepartmentManagers();
      res.json(departmentManagers);
    };
    
    public getDepartmentManagerById = async (req: Request, res: Response): Promise<void> => {
      const id = req.params.id;
      const departmentManager = await this.departmentManagerService.getDepartmentManagerById(id);
      res.json(departmentManager);
    };
    
    public createDepartmentManager = async (req: Request, res: Response): Promise<void> => {
      const departmentManagerData: DepartmentManager = req.body;
      const newDepartmentManager = await this.departmentManagerService.createDepartmentManager(departmentManagerData);
      res.json(newDepartmentManager);
    };
    
    public updateDepartmentManager = async (req: Request, res: Response): Promise<void> => {
      const id = req.params.id;
      const departmentManagerData: DepartmentManager = req.body;
      const updatedDepartmentManager = await this.departmentManagerService.updateDepartmentManager(id, departmentManagerData);
      res.json(updatedDepartmentManager);
    };
    
    public deleteDepartmentManager = async (req: Request, res: Response): Promise<void> => {
      const id = req.params.id;
      await this.departmentManagerService.deleteDepartmentManager(id);
      res.json({ message: `Department Manager with id ${id} deleted successfully` });
    };
    
}
