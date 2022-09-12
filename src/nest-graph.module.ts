import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      useFactory: async () => ({
        graphiql: true,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        allowBatchedQueries: true,
        sortSchema: true,
        cache: false,
        context: (request, reply) => ({
          randomValue: Math.random(),
        }),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class NestGraphModule {}
