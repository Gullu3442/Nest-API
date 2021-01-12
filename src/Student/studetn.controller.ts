import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { StudentService } from "./student.service";

@Controller("student")
export class StudentController{
    constructor(private service:StudentService){}

    @Get()
    getStudents(){
    return    this.service.getStudentList()
    }


    @Post()
    async  createStudent(@Body() body){
    return   this.service.createStudent(body)
    }

}