import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.MAIN_DB_HOST,
  port: process.env.MAIN_DB_PORT as any,
  username: process.env.MAIN_DB_USERNAME,
  database: process.env.MAIN_DB_DATABASE,
  password: process.env.MAIN_DB_PASSWORD,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
  logging: true,
};
export = typeOrmConfig;
