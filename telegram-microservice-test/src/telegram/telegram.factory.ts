import { ConfigService } from '@nestjs/config';

export default async (configService: ConfigService) => ({
  baseURL: `https://api.telegram.org/bot${configService.get(
    'TELEGRAM_BOT_TOKEN',
  )}/`,
});
