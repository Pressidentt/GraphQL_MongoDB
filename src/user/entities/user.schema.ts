import { Role } from './../../role/entities/role.schema';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@ObjectType()
@Schema()
export class User {
  @Field()
  _id: string;

  @Field()
  @Prop({ type: String, required: true })
  name: string;

  @Field(() => [Role], { nullable: true })
  @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role'}]})
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
