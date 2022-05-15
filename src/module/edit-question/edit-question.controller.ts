import { Controller, Get, Post, Body, Patch, Query, Param, Delete } from '@nestjs/common';
import { EditQuestionService } from './edit-question.service';
import { CreateEditQuestionDto } from './dto/create-edit-question.dto';
import { UpdateEditQuestionDto } from './dto/update-edit-question.dto';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('edit-question module')
@Controller('edit-question')
export class EditQuestionController {

	constructor(private readonly editQuestionService: EditQuestionService) { }

	@Post()
	create(@Body() createEditQuestionDto: CreateEditQuestionDto) {
		return this.editQuestionService.create(createEditQuestionDto);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateEditQuestionDto: UpdateEditQuestionDto) {
		return this.editQuestionService.update(id, updateEditQuestionDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.editQuestionService.remove(id);
	}

	@Get('findOne')
	findOne(@Query('id') id: string) {
		return this.editQuestionService.findOne(id);
	}
}
