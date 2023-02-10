import { MongooseModule } from '@nestjs/mongoose/dist';
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { RoleSchema } from './entities/role.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Role', schema: RoleSchema }])],
  providers: [RoleResolver, RoleService]
})
export class RoleModule {}
