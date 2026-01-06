import { defineConfig } from '@prisma/config';
import * as dotenv from 'dotenv';

dotenv.config(); // Ensures DATABASE_URL is loaded from .env

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
});