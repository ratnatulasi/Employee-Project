import { AppDataSource } from '../utils/data-source';
import { Employee } from '../entity/Employee';

export class EmployeeService {
  private readonly employeeRepository = AppDataSource.getRepository(Employee);

  public getAllEmployees = async (): Promise<Employee[]> => {
    return await this.employeeRepository.find();
  };

  public getEmployeeById = async (empNo: number): Promise<Employee | null> => {
    let a  = await this.employeeRepository.findOne({relations:["salaries"], where: {empNo:empNo}});
    console.log(a);
    return a
  };

  public createEmployee = async (employee: Employee): Promise<Employee> => {
    return await this.employeeRepository.save(employee);
  };

  public updateEmployee = async (empNo: number, employee: Employee): Promise<Employee | undefined> => {
    const existingEmployee = await this.getEmployeeById(empNo);
    if (!existingEmployee) {
      return undefined;
    }
    const updatedEmployee = { ...existingEmployee, ...employee };
    return await this.employeeRepository.save(updatedEmployee);
  };

  public deleteEmployee = async (empNo: number): Promise<Employee | undefined> => {
    const existingEmployee = await this.getEmployeeById(empNo);
    if (!existingEmployee) {
      return undefined;
    }
    await this.employeeRepository.delete(empNo);
    return existingEmployee;
  };
}
