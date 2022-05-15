import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from './module/upload/upload.module';
import { ProjectModule } from './module/project/project.module';
import { EditQuestionModule } from './module/edit-question/edit-question.module';
import { EditSectionModule } from './module/edit-section/edit-section.module';

@Module({
	imports: [
		TypeOrmModule.forRoot(),
		UploadModule,
		ProjectModule,
		EditQuestionModule,
		EditSectionModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
