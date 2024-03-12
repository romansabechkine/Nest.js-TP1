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

  // Une route GET dotée d'un paramètre qui renvoie directement la valeur de ce paramètre.
  @Get(":id")
  getId(@Param("id", ParseIntPipe) id:number ) : number {
    return id;
  }

  // Une route POST dotée d'un body qui renvoie la valeur de ce body.
  @Post("/send")
  getNameSurnameFromBody(@Body('name') name: string, @Body('surname') surname: string): string {
    return `You passed: ${name},${surname}`;
  }

}



