import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      port: 3001,
      host: 'localhost',
    },
  });
  await app.listen();
  Logger.log('Telegram microservice is listening...');
}
bootstrap();
