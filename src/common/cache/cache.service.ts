import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async get<T>(key: string): Promise<T> {
    return this.cache.get(key);
  }

  async set(key: string, value: any, ttl: number = 60): Promise<any> {
    return this.cache.set(key, value, { ttl });
  }
}
