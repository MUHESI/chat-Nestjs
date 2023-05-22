import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { GatewayModule } from './gateway/gateway.module';
import { MessagesModule } from './messages/messages.module';

// MessagesModule GatewayModule
const modules = [MessagesModule];

@Module({
  imports: [...modules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
