import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { EnvVarModel } from './config/env-var.model';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { DataLoaderModule } from './data-loader/data-loader.module';
import { DataLoaderService } from './data-loader/data-loader.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    GraphQLModule.forRootAsync<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      imports: [ConfigModule, DataLoaderModule],
      inject: [ConfigService, DataLoaderService],
      useFactory: async (
        config: ConfigService<EnvVarModel>,
        dataLoader: DataLoaderService,
      ) => ({
        graphiql: config.get('graphiql'),
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        allowBatchedQueries: true,
        sortSchema: true,
        cache: false,
        context: (request, reply) => ({
          randomValue: Math.random(),
          loaders: dataLoader.createLoader(),
        }),
        cors: {
          origin: config.get('origins'),
          credentials: true,
        },
        loaders: dataLoader.defaultLoader(),
      }),
    }),
    UserModule,
    PostModule,
    DataLoaderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class NestGraphModule {}
