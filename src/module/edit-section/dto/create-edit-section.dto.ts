import { Column, ObjectIdColumn, ObjectID } from "typeorm";

import { EditSectionInfo, EditSection } from '../entities/edit-section.entity';
import { EditQuestionModel } from 'src/module/edit-question/entities/question.entity';

export class CreateEditSectionDto {

	@Column()
	projectId?: string;

	@Column()
	status: string;

	@Column(type => EditSection)
	editSectionData: EditSection[];

	@Column(type => EditQuestionModel)
	editQuestionsWaitList: EditQuestionModel[];

	@Column()
	createDate?: Date;

	@Column()
	updateDate?: Date;

}
