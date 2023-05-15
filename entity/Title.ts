import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./Employee";

@Entity("titles")
export class Title{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @ManyToOne(() => Employee, employee => employee.salaries, {onDelete:"SET NULL"})
    @JoinColumn({name:"empNo"})
    empNo: Employee;
    
    @Column()
    title: string;

    @Column()
    fromDate: string;

    @Column()
    toDate: string;

    @ManyToOne(() => Employee, employee => employee.title,{onDelete:"SET NULL"})
    @JoinTable(({name:"employee"}))
    employee: Employee;
    
    
    toJSON() {
        return {
            ...this
        };
    }
}