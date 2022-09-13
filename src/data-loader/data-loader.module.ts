import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { DataLoaderService } from './data-loader.service';

@Module({
  imports: [UserModule],
  providers: [DataLoaderService],
  exports: [DataLoaderService],
})
export class DataLoaderModule {}
