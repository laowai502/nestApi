import { Module } from '@nestjs/common';
import { EditQuestionService } from './edit-question.service';
import { EditQuestionController } from './edit-question.controller';

@Module({
	controllers: [EditQuestionController],
	providers: [EditQuestionService]
})
export class EditQuestionModule { }
