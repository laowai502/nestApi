import { Controller, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {

	@Post()
	@UseInterceptors(FileInterceptor('file'))
	async UploadedFile(@UploadedFile() file, @Body() body) {
		file.fileUrl = `/static/${ file.filename }`;
		return file;
	}
}
