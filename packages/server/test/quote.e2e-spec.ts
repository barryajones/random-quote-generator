// vendors
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import request from 'supertest';

import { QuoteModule } from '~/quote/quote.module';
import { QuoteEntity } from '~/quote/+entity/quote.entity';

describe('QuoteController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        QuoteModule,
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [QuoteEntity],
          logging: false,
          synchronize: true,
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should get a random quote: /quote (GET)', () => {
    return request(app.getHttpServer())
      .get('/quote')
      .expect(200)
      .expect(({ body }) => {
        return body.hasOwnProperty('quote') && body.hasOwnProperty('character');
      });
  });
});
