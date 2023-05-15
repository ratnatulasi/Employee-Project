import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DepartmentEmployee } from "./DepartmentEmployee";
import { DepartmentManager } from "./DepartmentManager";

@Entity("departments")
export class Department {

    @PrimaryGeneratedColumn()
    deptNo: number;

    

    @Column()
    deptName: string;

    @OneToMany(() => DepartmentEmployee, deptEmp => deptEmp.department)
    employees: DepartmentEmployee[];

    @OneToMany(() => DepartmentManager, deptManager => deptManager.department)
    managers: DepartmentManager[];

    toJSON() {
        return {
            ...this
        };
    }
}