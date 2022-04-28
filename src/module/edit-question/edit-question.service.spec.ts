import { Test, TestingModule } from '@nestjs/testing';
import { EditQuestionService } from './edit-question.service';

describe('EditQuestionService', () => {
  let service: EditQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditQuestionService],
    }).compile();

    service = module.get<EditQuestionService>(EditQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
