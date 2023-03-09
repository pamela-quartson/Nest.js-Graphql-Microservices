import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  _id: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
