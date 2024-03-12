import { Injectable, Inject } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { TaskService } from 'src/task/task.service';


@Injectable()
export class TaskServiceJSON extends TaskService {

  protected taskJsonPath

  constructor(private options: Record<string, string>) {
    super();
    this.taskJsonPath = options.path
    //this.taskJsonPat = taskJsonPat
    console.log(this.taskJsonPath);
  } 
  

  //private readonly taskJsonPath = 'src/task-json/tasks.json';

  //private readonly taskJsonPath = 'src/task-json/tasks.json';
  
  getAll(){
      return this.getTasksFromJsonFile();
  }

  create(dto:TaskDto){
    this.TASKS = this.getTasksFromJsonFile();
    this.TASKS.push({
      id: this.TASKS.length+1,
      isDone: false,
      name: dto.name,
    });
    this.overrideTasks(this.TASKS);
  }

  toggleDone(id:number) {
    this.TASKS = this.getTasksFromJsonFile();
    const task = this.TASKS.find(task => task.id === id)
    task.isDone = !task.isDone
    this.overrideTasks(this.TASKS);
    return task
  }

  protected getTasksFromJsonFile() {
    const buffer = readFileSync(this.taskJsonPath);
    const tasks = JSON.parse(buffer.toString());
    console.log(tasks)
    return tasks;
}

  protected overrideTasks(tasks): void {
    writeFileSync(this.taskJsonPath, JSON.stringify(tasks));
  }
}
