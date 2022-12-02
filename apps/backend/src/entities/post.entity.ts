import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
@ObjectType()
@Entity()
@Unique(['title'])
class Post {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  @IsNotEmpty()
  title: string;

  @Field()
  @Column()
  link: string;

  @Field()
  @Column()
  snippet: string;

  @Field()
  @Column()
  imageUrl: string;

  @Column()
  @Field(() => Date)
  @CreateDateColumn()
  createAt: Date;
  @Column()
  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}

export default Post;
