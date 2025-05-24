import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';

const logger = new Logger('MainLogger');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('SQL to MikroORM API')
    .setDescription('API for converting native SQL implementations to MikroORM')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('documentation', app, swaggerDocument);

  await app.listen(process.env.APP_PORT ?? 3000);
}

bootstrap()
  .then(() => logger.log('Application started'))
  .catch((err) => logger.error('Application failed to start:', err));
