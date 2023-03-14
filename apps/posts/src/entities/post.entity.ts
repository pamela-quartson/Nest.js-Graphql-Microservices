import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class Post {
  @Field(() => ID)
  _id: string;

  @Field()
  title: string;

  @Field()
  text: string;

  @Field()
  likes: number;
  
  @Field()
  author: string;

  @Field(() => User)
  user?: User;
}
