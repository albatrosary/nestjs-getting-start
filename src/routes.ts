import { Routes } from 'nest-router';
import { AppModule } from './app.module';
import { UiModule } from './ui/ui/ui.module';
export const routes: Routes = [
  {
    path: '/',
    module: AppModule,
    children: [{ path: '/api/v1', module: UiModule }],
  },
];