import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testMatch: ["tests/uploadDownload.test.ts"]
});
