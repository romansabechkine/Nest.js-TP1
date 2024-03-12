import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TaskServiceJSON } from './task.service';
import { TaskDto } from './task.dto';


@Controller('tasks-json')
export class TaskControllerJSON {
  constructor(private readonly taskServiceJSON: TaskServiceJSON) {}

  @Get()
   async getTasks() {
    return this.taskServiceJSON.getAll()
   }
  
   @Post()
   @UsePipes(new ValidationPipe())
   async create(@Body() dto: TaskDto) {
    return this.taskServiceJSON.create(dto)
   }

   @Patch(':id')
   async toggleDone(@Param('id', ParseIntPipe) id: number) {
    return this.taskServiceJSON.toggleDone(id)
   }
}
