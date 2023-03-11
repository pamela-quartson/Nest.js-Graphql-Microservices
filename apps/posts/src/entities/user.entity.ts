import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';
import { Post } from './post.entity';

@ObjectType()
@Directive('@key(fields: "_id")')
export class User {
  @Field(() => ID)
  _id: string;

  @Field(() => [Post])
  posts?: Post[]
}