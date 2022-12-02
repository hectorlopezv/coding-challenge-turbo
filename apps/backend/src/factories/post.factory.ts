import { faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import Post from '../entities/post.entity';
define(Post, (fake: typeof faker) => {
  const post = new Post();
  const lastName = fake.internet.userName();
  const firstName = `hector ${lastName}`;
  post.title = `${firstName}`;
  post.snippet = faker.lorem.paragraph();
  post.link =
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null';
  post.imageUrl = faker.image.cats();
  post.id = faker.datatype.number();
  post.createAt = faker.date.past();
  return post;
});
