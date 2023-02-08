import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { UserSchema } from './entities/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UserResolver, UserService]
})
export class UserModule {}
