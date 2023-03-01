import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001, // Порт telegram-microservice
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000); // Порт для другого приложения
}
bootstrap();
