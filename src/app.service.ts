import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('TELEGRAM_MICROSERVICE')
    private readonly telegramClient: ClientProxy,
  ) {}

  async sendTelegramMessage(message: { chat_id: string; text: string }) {
    const pattern = { cmd: 'sendTelegramMessage' };
    return this.telegramClient.send(pattern, message).toPromise();
  }
}
