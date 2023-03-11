import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { User } from './entities/user.entity';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postsService.create(createPostInput);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(@Args('id') id: string, @Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postsService.update(id, updatePostInput);
  }

  @Mutation(() => Post)
  likePost(@Args('id') id: string ) {
    return this.postsService.likePost(id);
  }

  @Mutation(() => Post)
  removePost(@Args('id') id: string) {
    return this.postsService.remove(id);
  }

  @ResolveField(() => User)
  user(@Parent() post: Post): unknown{
    return {__typename: 'User', id: post.user};
  }
}
