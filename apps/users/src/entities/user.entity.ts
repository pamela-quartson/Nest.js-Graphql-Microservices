import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "_id")')
export class User {
  @Field(()=> ID)
  _id: string;

  @Field()
  full_name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}