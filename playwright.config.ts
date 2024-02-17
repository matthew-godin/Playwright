import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testMatch: ["tests/dropdown.test.ts"]
});
