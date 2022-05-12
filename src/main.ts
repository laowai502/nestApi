import { NestFactory } from '@nestjs/core';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

import { join } from 'path';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

	app.setGlobalPrefix('api');
	app.useStaticAssets(join(__dirname, '../assets/', 'file'), {
		prefix: '/static/'
	});

	const config = new DocumentBuilder()
		.setTitle('NestApi Document')
		.setDescription('All module apis\' description')
		.setVersion('1.0')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(3002);
}
bootstrap();
