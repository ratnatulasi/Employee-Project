import { AppDataSource } from '../utils/data-source';
import { DepartmentManager } from '../entity/DepartmentManager';

export class DepartmentManagerService {
  private departmentManagerRepository = AppDataSource.getRepository(DepartmentManager);

  async getAllDepartmentManagers(): Promise<DepartmentManager[]> {
    return this.departmentManagerRepository.find();
  }

  async getDepartmentManagerById(id: string): Promise<DepartmentManager | null> {
    return this.departmentManagerRepository.findOneBy({id});
  }

  async createDepartmentManager(departmentManagerData: DepartmentManager): Promise<DepartmentManager> {
    const newDepartmentManager = this.departmentManagerRepository.create(departmentManagerData);
    return this.departmentManagerRepository.save(newDepartmentManager);
  }

  async updateDepartmentManager(id: string, departmentManagerData: DepartmentManager): Promise<DepartmentManager> {
    const departmentManagerToUpdate = await this.departmentManagerRepository.findOneBy({id});
    if (!departmentManagerToUpdate) {
      throw new Error(`Department Manager with id ${id} not found`);
    }

    const updatedDepartmentManager = Object.assign(departmentManagerToUpdate, departmentManagerData);
    return this.departmentManagerRepository.save(updatedDepartmentManager);
  }

  async deleteDepartmentManager(id: string): Promise<void> {
    const departmentManagerToDelete = await this.departmentManagerRepository.findOneBy({id});
    if (!departmentManagerToDelete) {
      throw new Error(`Department Manager with id ${id} not found`);
    }

    await this.departmentManagerRepository.remove(departmentManagerToDelete);
  }
}
