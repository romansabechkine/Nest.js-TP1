import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';


@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
   async getTasks() {
    return this.taskService.getAll()
   }
  
   @Post()
   @UsePipes(new ValidationPipe())
   async create(@Body() dto: TaskDto) {
    return this.taskService.create(dto)
   }

   @Patch(':id')
   async toggleDone(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.toggleDone(id)
   }
}
