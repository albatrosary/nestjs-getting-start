import { Controller, Get } from '@nestjs/common';

@Controller('ui')
export class UiController {
  @Get()
  getHello(): string {
    return 'ui';
  }
}
