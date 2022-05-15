import { PartialType } from '@nestjs/swagger';
import { CreateEditSectionDto } from './create-edit-section.dto';

export class UpdateEditSectionDto extends PartialType(CreateEditSectionDto) {}
