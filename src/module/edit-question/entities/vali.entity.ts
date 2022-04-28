import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

export class Vali {

	@Column()
	valiTypeId: number;

	@Column()
	valiTypeDesc: string;

	@Column()
	valiExpress: any;

	@Column()
	ValiMess?: string;

}
