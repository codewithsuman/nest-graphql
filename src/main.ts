import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { EnvVarModel } from './config/env-var.model';
import { NestGraphModule } from './nest-graph.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    NestGraphModule,
    new FastifyAdapter({ logger: true }),
  );
  const configService = app.get(ConfigService<EnvVarModel>);
  app.enableCors({
    origin: configService.get('origins'),
    credentials: true,
  });
  await app.listen(configService.get('port') || 3000);
}
bootstrap();
