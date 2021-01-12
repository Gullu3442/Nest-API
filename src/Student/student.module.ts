import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./student.entity";
import { StudentService } from "./student.service";
import { StudentController } from "./studetn.controller";

@Module(({
    imports:[TypeOrmModule.forFeature([Student])],
    controllers:[StudentController],
    providers:[StudentService]
}))
export default class StudentModule{}



