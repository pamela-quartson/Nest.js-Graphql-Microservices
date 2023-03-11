import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  full_name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
