import { Test, TestingModule } from '@nestjs/testing';
import { EditQuestionController } from './edit-question.controller';
import { EditQuestionService } from './edit-question.service';

describe('EditQuestionController', () => {
  let controller: EditQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditQuestionController],
      providers: [EditQuestionService],
    }).compile();

    controller = module.get<EditQuestionController>(EditQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
