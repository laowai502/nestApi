import { Controller, Get, Post, Body, Patch, Query, Param, Delete } from '@nestjs/common';
import { EditSectionService } from './edit-section.service';
import { CreateEditSectionDto } from './dto/create-edit-section.dto';
import { UpdateEditSectionDto } from './dto/update-edit-section.dto';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('edit-section module')
@Controller('edit-section')
export class EditSectionController {

	constructor(private readonly editSectionService: EditSectionService) { }

	@Post()
	create(@Body() createEditSectionDto: CreateEditSectionDto) {
		return this.editSectionService.create(createEditSectionDto);
	}

	@Get('findOne')
	findOne(@Query('id') id: string) {
		return this.editSectionService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateEditSectionDto: UpdateEditSectionDto) {
		return this.editSectionService.update(id, updateEditSectionDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.editSectionService.remove(id);
	}
}
