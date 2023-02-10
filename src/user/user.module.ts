import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { UserSchema } from './entities/user.schema';
import { RoleSchema } from '../role/entities/role.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }, { name: 'Role', schema: RoleSchema }])],
  providers: [UserResolver, UserService]
})
export class UserModule { }
