import { Module, MiddlewareConsumer, DynamicModule } from '@nestjs/common';
import { TaskServiceJSON } from './task.service';
import { TaskControllerJSON } from './task.controller';
import { TaskLoggerMiddleware } from 'src/task/task.logger.middleware';


/* @Module({
  controllers: [TaskControllerJSON],
  providers: [TaskServiceJSON],
})
export class TaskModuleJSON {
  configure(consumer: MiddlewareConsumer) {
  consumer.apply(TaskLoggerMiddleware).forRoutes(TaskControllerJSON);
  }
} */


@Module({
  controllers: [TaskControllerJSON],
  providers: [TaskServiceJSON],
})
export class TaskModuleJSON {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TaskLoggerMiddleware).forRoutes(TaskControllerJSON);
  }
  static register(): DynamicModule {
    return {
      module: TaskModuleJSON,
      providers: [
        {
          provide: TaskServiceJSON,
          useValue: new TaskServiceJSON(
            {
              path: 'src/task-json/tasks.json'
            }
          )
        },
      ],
      exports: [TaskServiceJSON],
    };
  }
}

