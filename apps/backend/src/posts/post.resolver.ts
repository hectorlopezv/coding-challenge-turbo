import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindOnePostDto } from 'src/dto/find-one-post.dto';
import { SearchPostDto } from 'src/dto/search-post.dto';
import { SearchResponseDto } from 'src/dto/search-response.dto';
import { PostCreateDTO } from '../dto/create-post.dto';

import Post from '../entities/post.entity';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => [Post], { name: 'getAllPosts' })
  findAll() {
    return this.postService.findAll();
  }

  @Mutation(() => Post, { name: 'createPost' })
  create(@Args('createPost') post: PostCreateDTO) {
    return this.postService.create(post);
  }

  @Query(() => SearchResponseDto, { name: 'searchPosts' })
  search(@Args('searchPost') searchPost: SearchPostDto) {
    return this.postService.search(searchPost);
  }
  @Query(() => Post, { name: 'findOnePost' })
  findOnePost(@Args('findOnePost') findOnePost: FindOnePostDto) {
    return this.postService.findOne(findOnePost);
  }
}
// {
//   "createPost": {
//     "title": "hextor2",
//     "snippet": "hectpr andres",
//     "link": "www.google.com",
//     "imageUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null"
//   }
// }
