import { Field, Int, ObjectType } from '@nestjs/graphql';
import Post from 'src/entities/post.entity';

@ObjectType()
export class SearchResponseDto {
  @Field(() => [Post])
  posts: Post[];
  @Field(() => Int)
  totalCount: number;
}
