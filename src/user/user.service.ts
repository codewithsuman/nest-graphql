import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Anna' },
  ];
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((usr) => usr.id === id);
  }

  findByIds(ids: number[]) {
    const userMap = this.users.reduce((cumm, curr) => {
      cumm.set(curr.id, curr);
      return cumm;
    }, new Map());
    return ids.map((id) => userMap.get(id));
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
