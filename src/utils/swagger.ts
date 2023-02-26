import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
export const setupSwagger = (app: INestApplication): void => {
  const options = new DocumentBuilder()
    .setTitle('NestJS CURD Study API Docs')
    .setDescription('NestJS Study API Description')
    .setVersion('2.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
};
