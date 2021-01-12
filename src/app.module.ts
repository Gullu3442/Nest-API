import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModuleModule } from './teacher/teacher-module/teacher-module.module';
import StudentModule from './Student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Student } from './Student/student.entity';
import {ProductModule} from './Products/product.module';
@Module({
  imports: [StudentModule, TeacherModuleModule, TypeOrmModule.forRoot(), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {
      console.log("connected To database")
  }


}
