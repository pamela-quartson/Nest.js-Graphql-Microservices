import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PostRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postRepository: PostRepository){}
  create(createPostInput: CreatePostInput) {
    return this.postRepository.create({...createPostInput, likes: 0});
  }

  findAll() {
    return this.postRepository.findAll({});
  }

  findOne(id: string) {
    return this.postRepository.findOne({_id: id}, {});
  }

  update(id: string, updatePostInput: UpdatePostInput) {
    return this.postRepository.findOneAndUpdate({_id: id}, updatePostInput);
  }

  likePost(id: string) {
    return this.postRepository.findOneAndUpdate({_id: id}, {$inc: {likes: 1}});
  }

  remove(id: string) {
    return this.postRepository.findOneAndDelete({_id: id});
  }

  async forAuthor(id: string){
    return await this.postRepository.findAll({author: id})
  }
}
