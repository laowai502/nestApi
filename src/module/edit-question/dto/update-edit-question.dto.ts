import { PartialType } from '@nestjs/swagger';
import { CreateEditQuestionDto } from './create-edit-question.dto';

export class UpdateEditQuestionDto extends PartialType(CreateEditQuestionDto) {}
