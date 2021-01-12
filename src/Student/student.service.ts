import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StudentDto } from "./Student.dto";
import { Student } from "./student.entity";

@Injectable()
export class StudentService{

    constructor(@InjectRepository(Student) private studentRepostiry:Repository<Student>){}
   async getStudentList(){
         return  await  this.studentRepostiry.find()
    }


 async  createStudent(student:StudentDto){

       let std =  await this.studentRepostiry.findOne({where:{name:student.name}})

       if(std)
       {
           return {msg:"Student is already exist"}
       }
       else{
        return await this.studentRepostiry.save(student)
       }


        
    }
}