import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: './global-setup',
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    headless: process.env.CI ? true : false,
    baseURL: 'https://demo.haroldwaste.com/',
    storageState: 'storageState.json',
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  testDir: './tests',
  retries: 1
});