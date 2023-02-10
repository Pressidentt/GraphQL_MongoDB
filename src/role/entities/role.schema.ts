import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type RoleDocument = HydratedDocument<Role>;

@ObjectType()
@Schema()
export class Role {
    @Field()
    _id: string;

    @Field()
    @Prop({ type: String, required: true })
    name: string;

    @Field()
    @Prop({ type: String, required: true })
    description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);