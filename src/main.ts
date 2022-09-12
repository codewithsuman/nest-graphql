import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { NestGraphModule } from './nest-graph.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    NestGraphModule,
    new FastifyAdapter({ logger: true }),
  );
  await app.listen(3000);
}
bootstrap();
