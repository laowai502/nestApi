import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";
import { EditQuestionModel } from './question.entity';

@Entity({
	name: 'EditQuestion'
})
export class EditQuestion {

	@ObjectIdColumn()
	id?: ObjectID;

	@Column()
	projectId?: string;

	@Column()
	status: string;

	@Column(type => EditQuestionModel)
	dataCollection: EditQuestionModel[];

	@Column()
	createDate: Date;

	@Column()
	updateDate: Date;
}
