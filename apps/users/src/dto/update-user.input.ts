import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  full_name?: string;

  @Field()
  email?: string;
}
