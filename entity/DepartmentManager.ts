import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./Department";
import { Employee } from "./Employee";

@Entity("dept_manager")
export class DepartmentManager {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ManyToOne(() => Employee,employee=>employee.dept_manager,{onDelete:"SET NULL"})
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

    @ManyToOne(() => Department, department => department.managers)
    department: Department;

    toJSON() {
        return {
            ...this
        };
    }
}