import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateRoleInput } from './dto/create-role.input';
import { Role } from './entities/role.schema';
import { RoleService } from './role.service';

@Resolver()
export class RoleResolver {
  constructor(private readonly roleService: RoleService) { }

  @Query(() => [Role], { name: 'role' })
  async findAll() {
    return await this.roleService.findAll();
  }

  @Mutation(() => Role)
  async createRole(@Args('createRoleInput') createRoleInput: CreateRoleInput) {
    return await this.roleService.createRole(createRoleInput);
  }
}
