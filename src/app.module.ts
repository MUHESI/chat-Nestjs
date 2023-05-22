import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateway/gateway.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [GatewayModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
