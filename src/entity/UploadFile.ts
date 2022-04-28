import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_CaseAttachment", ["id"], { unique: true })
@Entity("UploadFile", { schema: "dbo" })
export class UploadFile {
	@PrimaryGeneratedColumn({ type: "int", name: "id" })
	id: number;

	@Column("varchar", { name: "FileURL", length: 200 })
	fileUrl: string;

	@Column("nvarchar", { name: "FileName", nullable: true, length: 2000 })
	fileName: string | null;

	@Column("int", { name: "FileSize" })
	fileSize: number;

	@Column("datetime", { name: "CreatedDttm" })
	createdDttm: Date;

	@Column("varchar", { name: "CreatedBy", length: 50 })
	createdBy: string;

	@Column("datetime", { name: "UpdatedDttm" })
	updatedDttm: Date;

	@Column("varchar", { name: "UpdatedBy", length: 50 })
	updatedBy: string;
}
