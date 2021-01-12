import { table } from "console";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("students")
export class Student{
     @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    age:number
    @Column()
    category:number
}