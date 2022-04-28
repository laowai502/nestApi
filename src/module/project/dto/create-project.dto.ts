import { Column } from "typeorm";

export class CreateProjectDto {

	@Column()
	projectName: string;

	@Column()
	showTitle: boolean;

	@Column()
	showQNumber: boolean;

	@Column()
	showWel: boolean;

	@Column()
	showProgress: boolean;

	@Column()
	showHeader: boolean;

	@Column()
	headerType: string;

	@Column()
	headerTxt: string;

	@Column()
	headerPic: Array<string>;

	@Column()
	bgColor: string;

	@Column()
	bColor: string;

	@Column()
	bOpacity: number;

	@Column()
	enablePagelayout: boolean;

	@Column()
	templateId: number;

	@Column()
	createDate?: Date;

	@Column()
	updateDate: Date;

}
