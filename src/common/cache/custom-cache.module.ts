import { CacheModule, Global, Module } from '@nestjs/common';
import { CacheService } from './cache.service';

@Global()
@Module({
  imports: [CacheModule.register({ ttl: 60, max: 1000 })],
  providers: [CacheService],
  exports: [CacheService],
})
export class CustomCacheModule {}
