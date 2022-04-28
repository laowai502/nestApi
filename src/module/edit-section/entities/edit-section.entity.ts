import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";
import { EditQuestionModel } from 'src/module/edit-question/entities/question.entity';

class EditSectionPanel {

	@Column()
	name: string;

	@Column()
	level: number;

	@Column()
	active?: boolean;

	@Column()
	cIndex?: string;

	@Column()
	children: EditSectionPanel[] | EditQuestionModel[];
}

export class EditSection {

	@Column()
	id: string;

	@Column()
	name: string;

	@Column()
	icon: string;

	@Column()
	title: string;

	@Column()
	children?: EditSection[];

	@Column()
	content?: EditSectionPanel[] | EditQuestionModel[];;

	@Column()
	open: boolean;

	@Column()
	selected: boolean;

	@Column()
	disabled: boolean;
}

@Entity({
	name: 'PageSection'
})
export class EditSectionInfo {

	@ObjectIdColumn()
	id?: ObjectID;

	@Column()
	projectId?: string;

	@Column()
	status: string;

	@Column(type => EditSection)
	editSectionData: EditSection[];

	@Column(type => EditQuestionModel)
	editQuestionsWaitList: EditQuestionModel[];

	@Column()
	createDate: Date;

	@Column()
	updateDate: Date;

}
