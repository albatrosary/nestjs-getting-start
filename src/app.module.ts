import { Module } from '@nestjs/common';
import { RouterModule, Route } from 'nest-router';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UiModule } from './ui/ui/ui.module';
import { DomainController } from './domain/domain/domain.controller';
import { DomainService } from './domain/domain/domain.service';
import { routes } from './routes';

@Module({
  imports: [RouterModule.forRoutes(routes), UiModule],
  controllers: [AppController, DomainController],
  providers: [AppService, DomainService],
})
export class AppModule {}
