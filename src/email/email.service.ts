import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';

@Injectable()
export class EmailService {
  create(createEmailDto: CreateEmailDto) {
    return 'This action adds a new email';
  }

  findAll() {
    const Email = {
      id: '1',
      date: new Date(),
      title: 'title',
      body: 'body',
      category: 'category',
    };
    return Email;
  }

  findOne(id: number) {
    const Email = {
      data: {
        id: '1',
        date: new Date(),
        title: 'title',
        body: 'body',
        category: 'category',
      },
      name: 'hello',
    };
    return Email;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
}
