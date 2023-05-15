import { AppDataSource } from '../utils/data-source';
import { Department } from '../entity/Department';

export class DepartmentService {
  private readonly departmentRepository = AppDataSource.getRepository(Department);

  public getAllDepartments = async (): Promise<Department[]> => {
    return await this.departmentRepository.find();
  };

  public getDepartmentById = async (deptNo: number): Promise<Department | null> => {
    return await this.departmentRepository.findOne({ where: { deptNo } });
  };

  public createDepartment = async (department: Department): Promise<Department> => {
    return await this.departmentRepository.save(department);
  };

  public updateDepartment = async (deptNo: number, department: Department): Promise<Department | undefined> => {
    const existingDepartment = await this.departmentRepository.findOne({ where: { deptNo } });
    if (!existingDepartment) {
      return undefined;
    }
    const updatedDepartment = { ...existingDepartment, ...department };
    return await this.departmentRepository.save(updatedDepartment);
  };

  public deleteDepartment = async (deptNo: number): Promise<Department | undefined> => {
    const existingDepartment = await this.departmentRepository.findOne({ where: { deptNo } });
    if (!existingDepartment) {
      return undefined;
    }
    await this.departmentRepository.delete({ deptNo });
    return existingDepartment;
  };
}
