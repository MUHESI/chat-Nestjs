import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'Moses', text: 'Hello evryone' }];
  clientToUser = {};

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    console.clear();
    console.log('clientToUser', this.clientToUser);

    return {
      res: Object.values(this.clientToUser),
      all: this.clientToUser,
    };
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  create(createMessageDto: CreateMessageDto) {
    return this.messages.push(createMessageDto);
  }

  findAll() {
    return this.messages;
  }
}
