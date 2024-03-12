import { Body, Controller, Get, Post, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { Param } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}



