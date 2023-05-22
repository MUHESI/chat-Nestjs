import { Controller, Get, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, interval, map } from 'rxjs';

interface IMessageEvenet {
  data: string;
}

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Sse('sse')
  serverSendEvents(): Observable<IMessageEvenet> {
    return interval(1000).pipe(map((__) => ({ data: 'Hello-world' })));
  }
}
