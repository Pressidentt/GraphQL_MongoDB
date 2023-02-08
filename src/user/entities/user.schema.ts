import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Mongoose } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@ObjectType()
@Schema()
export class User {
  @Field(() => Int)
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  _id: number;

  @Field(() => String)
  @Prop({ type: String, required: true })
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
