import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.schema';

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    const createdCat = new this.userModel(createUserInput);
    return createdCat.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
