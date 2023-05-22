import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'Moses', text: 'Hello evryone' }];

  create(createMessageDto: CreateMessageDto) {
    return this.messages.push(createMessageDto);
  }

  findAll() {
    return this.messages;
  }
}
