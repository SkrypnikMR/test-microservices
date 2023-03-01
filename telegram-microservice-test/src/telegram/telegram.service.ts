import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class TelegramService {
  constructor(private readonly telegramHttpService: HttpService) {}

  prepareRequestParams(sendMessageDto: SendMessageDto): string {
    return Object.entries(sendMessageDto)
      .map(
        ([key, value], index) => (index == 0 ? '?' : '&') + `${key}=${value}`,
      )
      .join('');
  }

  async sendMessage(sendMessageDto: SendMessageDto): Promise<AxiosResponse> {
    const url = 'sendMessage' + this.prepareRequestParams(sendMessageDto);

    return this.telegramHttpService.get(url).toPromise();
  }
}
