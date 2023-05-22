import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
// import { GatewayModule } from './gateway/gateway.module';
// import { MessagesModule } from './messages/messages.module';

// MessagesModule GatewayModule
// const modules = [MessagesModule];
const modules = [];

@Module({
  imports: [
    ...modules,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['api/*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
