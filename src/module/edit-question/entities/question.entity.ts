import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";
import { Option } from './option.entity';
import { Vali } from './vali.entity';

class QuesWholeOptionSettingModel {
	@Column()
	optionLayout?: number;
	@Column()
	selectEnableSearch?: boolean;
	@Column()
	canCheckAll?: boolean;
	@Column()
	defaultValue?: string;
	@Column()
	serverUrl?: string;
	@Column()
	enableSelectTime?: boolean;
	@Column()
	dateFormatType?: any;
}

export class EditQuestionModel {
	// main
	@Column()
	questionId: string;

	@Column()
	quesDesc?: string;

	@Column()
	quesTypeId: number;

	@Column()
	name: string; // type name content

	// style
	@Column()
	icon?: string;

	@Column()
	topDragStyle?: boolean;

	@Column()
	bottomDragStyle?: boolean;

	@Column()
	focus?: boolean;

	@Column()
	mouseenter?: boolean;

	@Column()
	mouseDownMoving?: boolean;

	// EditScaleModel
	@Column()
	extremeLeftText?: string;
	@Column()
	extremeRightText?: string;
	@Column()
	centerText?: string;
	@Column()
	extremeKey?: any;
	@Column()
	scaleLevel?: number;
	@Column()
	startLevelValue?: number;

	// the whole setting
	@Column()
	seqNo: any;
	@Column()
	showSeq: boolean;
	@Column()
	tooltip: string;
	@Column()
	identify: string;
	@Column()
	layout: number;

	// option
	@Column(type => Option)
	options?: Option[];

	@Column(type => QuesWholeOptionSettingModel)
	optSet?: QuesWholeOptionSettingModel;

	// validation
	@Column(type => Vali)
	validations?: Vali[];
}
