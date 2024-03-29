import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TaskModuleJSON } from './task-json/task.module';

@Module({
  imports: [TaskModule, TaskModuleJSON.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
