const { test, expect } = require('../fixtures');
const { site } = require('../test-data/site');

test.describe('Smoke', () => {
  test('SauceDemo application should load successfully', async ({ loginPage, page }) => {
    await loginPage.open();

    await expect(page).toHaveTitle(site.title);
    await expect(loginPage.loginButton).toBeVisible();
  });
});