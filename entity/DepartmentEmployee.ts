import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./Department";
import { Employee } from "./Employee";

@Entity("dept_emp")
export class DepartmentEmployee {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Employee,employee=>employee.dept_emp,{onDelete:"SET NULL"})
    @JoinColumn({name:"empNo"})
    empNo:Employee;


    @Column()
    deptNo: number;

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