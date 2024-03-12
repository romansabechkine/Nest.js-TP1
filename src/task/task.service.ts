import { Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';


@Injectable()
export class TaskService {

  protected TASKS = [
    {
      id:1,
      name: "Record a video",
      isDone: false,
    },
  ]
  getAll(){
      return this.TASKS
  }

  create(dto:TaskDto){
    this.TASKS.push({
      id: this.TASKS.length+1,
      isDone: false,
      name: dto.name,
    })
  }

  toggleDone(id:number) {
    const task = this.TASKS.find(task => task.id === id)
    task.isDone = !task.isDone
    return task
  }
}
