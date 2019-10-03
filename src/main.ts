import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersModule } from './modules/users/users.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Nest API End Points')
    .setDescription('The nest API description')
    .setVersion('1.0')
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [AppModule, UsersModule],
  });
  SwaggerModule.setup('api', app, document);

  console.log('APP Port', process.env.PORT);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
