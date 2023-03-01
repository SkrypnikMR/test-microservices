import { Controller, Post, Body } from '@nestjs/common';
import { SendMessageDto } from './dto/send-message.dto';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private telegramService: TelegramService) {}

  @Post('sendMessage')
  async sendMessage(@Body() sendMessageDto: SendMessageDto): Promise<void> {
    await this.telegramService.sendMessage(sendMessageDto);
  }
}
