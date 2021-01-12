import { Module } from '@nestjs/common';
import { TeacherModuleController } from './teacher-module.controller';

@Module({
  controllers: [TeacherModuleController]
})
export class TeacherModuleModule {}
