import { Test, TestingModule } from '@nestjs/testing';
import { TeacherModuleController } from './teacher-module.controller';

describe('TeacherModuleController', () => {
  let controller: TeacherModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherModuleController],
    }).compile();

    controller = module.get<TeacherModuleController>(TeacherModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
