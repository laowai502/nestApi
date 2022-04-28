import { Injectable } from '@nestjs/common';
import { CreateEditQuestionDto } from './dto/create-edit-question.dto';
import { UpdateEditQuestionDto } from './dto/update-edit-question.dto';

import { EditQuestion } from './entities/edit-question.entity';

import { getMongoManager, InsertResult, DeleteWriteOpResultObject } from "typeorm";

@Injectable()
export class EditQuestionService {

	async findOne(id: string) {
		const manager = getMongoManager();
		const data =  await manager.findOne(EditQuestion, { projectId: id });
		return data;
	}

	async create(createEditQuestionDto: CreateEditQuestionDto) {
		createEditQuestionDto.createDate = new Date();
		createEditQuestionDto.updateDate = new Date();
		const manager = getMongoManager();
		const data: InsertResult =  await manager.insert(EditQuestion, createEditQuestionDto);
		const newId: string = data.raw.insertedId;
		return newId;
	}

	async update(id: string, updateEditQuestionDto: UpdateEditQuestionDto) {
		updateEditQuestionDto.updateDate = new Date();
		const manager = getMongoManager();
		const data =  await manager.update(EditQuestion, id, updateEditQuestionDto);
		return data;
	}

	async remove(id: string) {
		const manager = getMongoManager();
		const data: DeleteWriteOpResultObject =  await manager.deleteOne(EditQuestion, { projectId: id });
		return data;
	}

}
