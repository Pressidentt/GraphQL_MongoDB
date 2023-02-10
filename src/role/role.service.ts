import { CreateRoleInput } from './dto/create-role.input';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleDocument } from './entities/role.schema';

@Injectable()
export class RoleService {
    constructor(
        @InjectModel('Role') private readonly roleModel: Model<RoleDocument>,
    ) { }

    async findAll(): Promise<RoleDocument[]> {
        return await this.roleModel.find().exec();
    }

    async createRole(createRoleInput: CreateRoleInput): Promise<RoleDocument> {
        const newRole = new this.roleModel(createRoleInput);
        return await newRole.save();
    }
}
