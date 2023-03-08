import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './schemas/user.schema';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
const HASH_SALT = 10;

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository){}

  async create(createUserInput: CreateUserInput) {
    this.validateCreateUserRequest(createUserInput);
    createUserInput.password = await bcrypt.hash(createUserInput.password, HASH_SALT);
    return this.userRepository.create(JSON.parse(JSON.stringify(createUserInput)));
  }

  private async validateCreateUserRequest(createUserInput: CreateUserInput) { 
    let user: User;
    try {
        user = await this.userRepository.findOne({email: createUserInput.email}, {password: 0});
    } catch (err) {
        throw new BadRequestException(err.message, { cause: err, description: err.message })
    }
    if (user) {
      throw new ConflictException('Email already exists.', { cause: new Error('Email already exists.'), description: 'Email already exists.' })
    }
}

  findAll() {
    return this.userRepository.findAll({password: 0});
  }

  findOne(id: string) {
    return this.userRepository.findOne({_id: id}, {password: 0});
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userRepository.findOneAndUpdate({_id: id}, updateUserInput);
  }

  remove(id: string) {
    return this.userRepository.findOneAndDelete({_id: id});
  }
}
