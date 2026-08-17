import 'server-only';

import { createClient, type RedisClientType } from 'redis';

let client: RedisClientType | null = null;
let connectingPromise: Promise<RedisClientType> | null = null;

async function getRedisClient(): Promise<RedisClientType> {
  if (client) return client;

  if (!connectingPromise) {
    connectingPromise = createClient({
      url: process.env.REDIS_V2_REDIS_URL,
    }).connect() as Promise<RedisClientType>;
  }

  client = await connectingPromise;
  return client;
}

export default getRedisClient;
