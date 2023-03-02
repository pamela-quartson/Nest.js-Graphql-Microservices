import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository){}

  async create(createUserInput: CreateUserInput) {
    return this.userRepository.create(createUserInput);
  }

  findAll() {
    return this.userRepository.find({});
  }

  findOne(id: string) {
    return this.userRepository.findOne({_id: id});
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userRepository.findOneAndUpdate({_id: id}, updateUserInput);
  }

  remove(id: string) {
    return this.userRepository.findOneAndDelete({_id: id});
  }
}
