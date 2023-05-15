import { DepartmentEmployee } from '../entity/DepartmentEmployee';

import { AppDataSource } from '../utils/data-source';
  
export class DepartmentEmployeeService {
  private readonly departmentEmployeeRepository = AppDataSource.getRepository(DepartmentEmployee);

  public getAllDepartmentEmployees = async (): Promise<DepartmentEmployee[]> => {
    return await this.departmentEmployeeRepository.find();
  };

  public getDepartmentEmployeeById = async (id: string): Promise<DepartmentEmployee | null> => {
    return await this.departmentEmployeeRepository.findOneBy({ id });
  };

  public createDepartmentEmployee = async (departmentEmployee: DepartmentEmployee): Promise<DepartmentEmployee> => {
    return await this.departmentEmployeeRepository.save(departmentEmployee);
  };

  public updateDepartmentEmployee = async (id: string, departmentEmployee: DepartmentEmployee): Promise<DepartmentEmployee | undefined> => {
    const existingDepartmentEmployee = await this.departmentEmployeeRepository.findOne({ where: { id } });
    if (!existingDepartmentEmployee) {
      return undefined;
    }
    const updatedDepartmentEmployee = { ...existingDepartmentEmployee, ...departmentEmployee };
    return await this.departmentEmployeeRepository.save(updatedDepartmentEmployee);
  };

  public deleteDepartmentEmployee = async (id: string): Promise<DepartmentEmployee | undefined> => {
    const existingDepartmentEmployee = await this.departmentEmployeeRepository.findOne({ where: { id } });
    if (!existingDepartmentEmployee) {
      return undefined;
    }
    await this.departmentEmployeeRepository.delete({ id });
    return existingDepartmentEmployee;
  };
}
