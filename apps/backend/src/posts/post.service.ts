import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchPostDto } from 'src/dto/search-post.dto';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import { PostCreateDTO } from '../dto/create-post.input';
import Post from '../entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postReposistory: Repository<Post>,
  ) {}

  async findAll() {
    return this.postReposistory.find({});
  }

  async create(post: PostCreateDTO) {
    const newPost = await this.postReposistory.create(post);
    const postData = await this.postReposistory.save(newPost);
    return postData;
  }
  async searchPosts(searchPost: SearchPostDto) {
    const pagination = {
      page: Number(searchPost.page || 1),
      limit: Number(searchPost.limit || 15),
    };
    const skip = (pagination.page - 1) * pagination.limit;
    const { search_term } = searchPost;

    const options: FindManyOptions<Post> = {};

    options.where = {
      title: ILike(`%${search_term}%`),
    };

    options.skip = skip;
    options.take = pagination.limit;

    const [data, total] = await this.postReposistory.findAndCount(options);
    return { totalCount: total, posts: data };
  }
  async search(searchPost: SearchPostDto) {
    try {
      const { totalCount, posts } = await this.searchPosts(searchPost);
      return {
        posts,
        totalCount,
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('error on request');
    }
  }
}
