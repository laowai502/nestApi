import { Column, ObjectIdColumn, ObjectID } from "typeorm";
import { EditQuestionModel } from '../entities/question.entity';

export class CreateEditQuestionDto {

	@Column()
	projectId?: string;

	@Column()
	status: string;

	@Column(type => EditQuestionModel)
	dataCollection: EditQuestionModel[];

	@Column()
	createDate?: Date;

	@Column()
	updateDate?: Date;

}
