import { Controller, Get } from '@nestjs/common';

@Controller('domain')
export class DomainController {
  @Get()
  getHello(): string {
    return 'ui';
  }
}
