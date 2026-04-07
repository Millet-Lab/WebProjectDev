import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// http://localhost:PORT/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // http://localhost:PORT/
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
