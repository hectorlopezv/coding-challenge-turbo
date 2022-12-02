import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: process.env.MAIN_DB_HOST,
      port: process.env.MAIN_DB_PORT as any,
      username: process.env.MAIN_DB_USERNAME,
      database: process.env.MAIN_DB_DATABASE,
      password: process.env.MAIN_DB_PASSWORD,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
      logging: true,
    };
  },
};
