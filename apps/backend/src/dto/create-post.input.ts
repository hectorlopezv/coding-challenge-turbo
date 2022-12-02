import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class PostCreateDTO {
  @Field()
  @IsString()
  title: string;
  @Field()
  @IsString()
  link: string;
  @Field()
  @IsString()
  imageUrl: string;
  @Field()
  @IsString()
  snippet: string;
}
