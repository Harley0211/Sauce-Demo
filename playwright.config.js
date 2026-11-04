const { defineConfig, devices } = require('@playwright/test');

const isPauseMode = process.env.PAUSE === '1';
const isCI = !!process.env.CI;

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: !isPauseMode,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isPauseMode || isCI ? 1 : undefined,
  timeout: isPauseMode ? 0 : 30_000,
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
    testIdAttribute: 'data-test',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ]
});