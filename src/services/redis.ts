// import Redis from 'ioredis';
import { createClient } from 'redis';

// const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

const redis = await createClient({ url: process.env.REDIS_URL }).connect();

export default redis;
