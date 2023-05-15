import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Salary } from './Salary';
import { Title } from './Title';


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

  toJSON() {
    return {
      ...this
    };
  }
}