import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskLoggerMiddleware } from './task.logger.middleware';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TaskLoggerMiddleware).forRoutes(TaskController);
  }
}
