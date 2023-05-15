import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./Employee";

@Entity("salaries")
export class Salary{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Employee, employee => employee.salaries, {onDelete:"SET NULL"})
    @JoinColumn({name:"empNo"})
    empNo: Employee;

    @Column()
    salary: number;

    @Column()
    fromDate: string;

    @Column()
    toDate: string;

    @ManyToOne(() => Employee, employee => employee.salaries)
    @JoinTable()
    employee: Employee;

    toJSON() {
        return {
            ...this
        };
    }
}