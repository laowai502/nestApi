import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';

import { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Module({
	imports: [
		MulterModule.register({
			storage: diskStorage({
				//自定义路径
				destination: `./assets/file`,
				filename: (req, file, cb) => {
					// 自定义文件名
					const filename = `${Math.ceil(Math.random() * 1000000)}.${file.mimetype.split('/')[1]}`;
					// return cb(null, filename);
					return cb(null, filename);
				},
			}),
		}),
	],
	controllers: [UploadController],
	providers: [UploadService]
})
export class UploadModule { }
