import { Factory, Seeder } from 'typeorm-seeding';
import Post from '../entities/post.entity';

export default class CreatePets implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(Post)().createMany(10);
  }
}
