import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  title: string;
  @Field()
  text: string;
  @Field()
  author: string;
}