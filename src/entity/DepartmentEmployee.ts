import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./Department";
import { Employee } from "./Employee";

@Entity("dept_emp")
export class DepartmentEmployee {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    deptNo: number;

    @Column()
    empNo: number;

    @Column()
    fromDate: string;

    @Column()
    toDate: string;

    @ManyToOne(() => Employee)
    employee: Employee;

    @ManyToOne(() => Department, department => department.employees)
    department: Department;

    toJSON() {
        return {
            ...this
        };
    }
}