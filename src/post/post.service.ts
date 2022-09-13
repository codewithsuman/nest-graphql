import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  private posts: Post[] = [
    { id: 'post-1', title: 'Post 1', body: 'Lorem 1', userId: 1 },
    { id: 'post-2', title: 'Post 2', body: 'Lorem 2', userId: 1 },
    { id: 'post-3', title: 'Post 3', body: 'Lorem 3', userId: 2 },
  ];
  create(createPostInput: CreatePostInput) {
    return 'This action adds a new post';
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
