import { Controller, Get, Post, Body, Patch, Param, Query, Delete } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@ApiTags('project module')
@Controller('project')
export class ProjectController {

	constructor(private readonly projectService: ProjectService) { }

	@Get()
	findAll() {
		return this.projectService.findAll();
	}

	@Get('findOne')
	findOne(@Query('id') id: string) {
		return this.projectService.findOne(id);
	}

	@Post()
	create(@Body() createProjectDto: CreateProjectDto) {
		return this.projectService.create(createProjectDto);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
		return this.projectService.update(id, updateProjectDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.projectService.remove(id);
	}
}
