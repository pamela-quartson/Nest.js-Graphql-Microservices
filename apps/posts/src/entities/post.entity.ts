import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field()
  _id: string;
  @Field()
  title: string;
  @Field()
  text: string;
  @Field()
  likes: number;
}
