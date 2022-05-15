import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

import { getMongoManager, getMongoRepository, InsertResult, DeleteResult } from "typeorm";

@Injectable()
export class ProjectService {

	async create(createProjectDto: CreateProjectDto) {
		createProjectDto.createDate = new Date();
		createProjectDto.updateDate = new Date();
		const manager = getMongoManager();
		const data: InsertResult =  await manager.insert(Project, createProjectDto);
		const newId: string = data.raw.insertedId;
		return newId;
	}

	async findAll(): Promise<Array<Project>> {
		const manager = getMongoManager();
		const data =  await manager.find(Project, { order: { createDate: 'DESC' }});
		return data;
	}

	async findOne(id: string) {
		const manager = getMongoManager();
		const data =  await manager.findOne(Project, id);
		return data;
	}

	async update(id: string, updateProjectDto: UpdateProjectDto) {
		updateProjectDto.updateDate = new Date();
		const manager = getMongoManager();
		const data =  await manager.update(Project, id, updateProjectDto);
		return data;
	}

	async remove(id: string) {
		const manager = getMongoManager();
		const data: DeleteResult =  await manager.delete(Project, id);
		return data;
	}
}
