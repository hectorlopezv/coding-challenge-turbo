import { Factory, Seeder } from 'typeorm-seeding';
import Post from '../entities/post.entity';

export default class CreatePets implements Seeder {
  public async run(factory: Factory): Promise<any> {
    console.log('factory', factory);
    const userEntityFactory = factory(Post)();
    await userEntityFactory.createMany(20);
  }
}
