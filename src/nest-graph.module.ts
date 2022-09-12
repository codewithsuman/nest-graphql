import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { EnvVarModel } from './config/env-var.model';

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
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService<EnvVarModel>) => ({
        graphiql: config.get('graphiql'),
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        allowBatchedQueries: true,
        sortSchema: true,
        cache: false,
        context: (request, reply) => ({
          randomValue: Math.random(),
        }),
        cors: {
          origin: config.get('origins'),
          credentials: true,
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class NestGraphModule {}
