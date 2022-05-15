import { Injectable } from '@nestjs/common';
import { CreateEditSectionDto } from './dto/create-edit-section.dto';
import { UpdateEditSectionDto } from './dto/update-edit-section.dto';

import { EditSectionInfo } from './entities/edit-section.entity'
import { getMongoManager, InsertResult, DeleteWriteOpResultObject } from "typeorm";

@Injectable()
export class EditSectionService {

	async create(createEditSectionDto: CreateEditSectionDto) {
		createEditSectionDto.createDate = new Date();
		createEditSectionDto.updateDate = new Date();
		const manager = getMongoManager();
		const data: InsertResult =  await manager.insert(EditSectionInfo, createEditSectionDto);
		const newId: string = data.raw.insertedId;
		return newId;
	}

	async findOne(id: string) {
		const manager = getMongoManager();
		const data = await manager.findOne(EditSectionInfo, { projectId: id });
		return data;
	}

	update(id: string, updateEditSectionDto: UpdateEditSectionDto) {
		return `This action updates a #${id} editSection`;
	}

	remove(id: string) {
		return `This action removes a #${id} editSection`;
	}

}
