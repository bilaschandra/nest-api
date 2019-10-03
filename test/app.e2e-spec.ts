import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppController } from './../src/app.controller';
import { AppService } from './../src/app.service';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let appController: AppController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AppService],
      controllers: [AppController],
    })
      .compile();

    app = module.createNestApplication();    
    await app.init();
  });

  it('should return “Hello World!”', () => {
    appController = app.get<AppController>(AppController);
    expect(appController.getHello()).toBe('Hello World!');
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

});
