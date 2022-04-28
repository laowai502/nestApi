import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

export class Option {

	@Column()
	optionId: string;

	@Column()
	optionDesc: string;

	@Column()
	focus?: boolean;

	@Column()
	optsMoving?: boolean;

	@Column()
	showOperateBtn?: boolean;

	@Column()
	limit: number;

	@Column()
	amount: number;

	@Column()
	formatLimit: any;

	@Column()
	point?: number;

	@Column()
	minValue?: number;

	@Column()
	maxValue?: number;

	@Column()
	lText?: string;

	@Column()
	cText?: string;

	@Column()
	rText?: string;
}
