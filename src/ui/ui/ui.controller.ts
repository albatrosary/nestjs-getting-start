import { Controller, Get } from '@nestjs/common';

@Controller('api/v1/ui')
export class UiController {
  @Get()
  getHello(): string {
    return 'ui';
  }
}
