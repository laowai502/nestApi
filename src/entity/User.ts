import { Column, Entity, Index } from "typeorm";

@Index("PK_Users", ["userId"], { unique: true })
@Entity("User", { schema: "user" })
export class User {
	@Column("uniqueidentifier", { primary: true, name: "UserId" })
	userId: string;

	@Column("nvarchar", { name: "FirstNm", nullable: true, length: 255 })
	firstNm: string | null;

	@Column("nvarchar", { name: "MiddleInitial", nullable: true, length: 255 })
	middleInitial: string | null;

	@Column("nvarchar", { name: "LastNm", nullable: true, length: 255 })
	lastNm: string | null;

	@Column("nvarchar", { name: "UserNm", length: 255 })
	userNm: string;

	@Column("nvarchar", { name: "EmailAddr", length: 255 })
	emailAddr: string;
}
