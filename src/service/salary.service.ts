import { AppDataSource } from '../utils/data-source';
import { Salary } from '../entity/Salary';

export class SalaryService {
  private readonly salaryRepository = AppDataSource.getRepository(Salary);

  public getAllSalaries = async (): Promise<Salary[]> => {
    return await this.salaryRepository.find();
  };

  public getSalaryByEmpNo = async (empNo: number): Promise<Salary | null> => {
    //return await this.salaryRepository.findOne({ where: { empNo } });
    return null;
  };

  public createSalary = async (salary: Salary): Promise<Salary> => {
    return await this.salaryRepository.save(salary);
  };

  public updateSalary = async (id: string, fromDate: string, salary: Salary): Promise<Salary | undefined> => {
    const existingSalary = await this.salaryRepository.findOne({ where: { id, fromDate } });
    if (!existingSalary) {
      return undefined;
    }
    const updatedSalary = { ...existingSalary, ...salary };
    return await this.salaryRepository.save(updatedSalary);
  };

  public deleteSalary = async (id: string): Promise<Salary | undefined> => {
    const existingSalary = await this.salaryRepository.findOneBy({ id });
    if (!existingSalary) {
      return undefined;
    }
    await this.salaryRepository.delete({ id });
    return existingSalary;
  };
}
