import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRoleInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  description: string;
}