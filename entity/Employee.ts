import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Salary } from './Salary';
import { Title } from './Title';
import { DepartmentManager } from './DepartmentManager';
import { DepartmentEmployee } from './DepartmentEmployee';
import { Department } from './Department';


@Entity('employees')
export class Employee {

  @PrimaryGeneratedColumn()
  empNo: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: ['male', 'female', 'other'],
    default: 'other',
  })
  gender: 'male' | 'female' | 'other';

  @Column()
  hireDate: string;

  @OneToMany(() => Salary, salary => salary.empNo , {onDelete:"SET NULL"})
  @JoinColumn({name:"salaries"})
  salaries: Salary[];

  @OneToMany(() => Title, title => title.empNo, {onDelete:"SET NULL"})
  @JoinColumn({name:"title"})
  title: Title[];

  @OneToMany(() => DepartmentManager, DepartmentManager => DepartmentManager.empNo , {onDelete:"SET NULL"})
  @JoinColumn({name:"dept_manager"})
  dept_manager:DepartmentManager [];

  @OneToMany(() => DepartmentEmployee, DepartmentEmployee => DepartmentEmployee.empNo , {onDelete:"SET NULL"})
  @JoinColumn({name:"dept_emp"})
  dept_emp:DepartmentEmployee [];

  /*@OneToMany(() => Department, Department => Department.empNo , {onDelete:"SET NULL"})
  @JoinColumn({name:"departments"})
  departments:Department [];*/

  toJSON() {
    return {
      ...this
    };
  }
}