const { test, expect } = require('../../fixtures');
const { users } = require('../../test-data/users');
const { loginErrors } = require('../../test-data/messages');
const { invalidLoginScenarios } = require('../../test-data/login-scenarios');
const { site } = require('../../test-data/site');

test.describe('Login form', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
  });

  test('standard user logs in and lands on the products page', async ({ loginPage, inventoryPage, page }) => {
    await loginPage.login(users.standard);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(inventoryPage.heading).toHaveText(site.inventoryHeading);
  });

  test('locked-out user sees a lockout error and stays on the login page', async ({ loginPage }) => {
    await loginPage.login(users.lockedOut);

    await expect(loginPage.errorMessage).toHaveText(loginErrors.lockedOut);
    await expect(loginPage.loginButton).toBeVisible();
  });

  for (const scenario of invalidLoginScenarios) {
    test(`shows an error when logging in with ${scenario.name}`, async ({ loginPage }) => {
      await loginPage.login(scenario.credentials);

      await expect(loginPage.errorMessage).toHaveText(scenario.error);
    });
  }

  test('error message can be dismissed', async ({ loginPage }) => {
    await loginPage.login(users.unknown);
    await expect(loginPage.errorMessage).toBeVisible();

    await loginPage.dismissError();

    await expect(loginPage.errorMessage).toBeHidden();
  });
});

test.describe('Access control', () => {
  test('visiting the products page without logging in redirects with an error', async ({ inventoryPage, loginPage }) => {
    await inventoryPage.open();

    await expect(loginPage.errorMessage).toHaveText(loginErrors.accessDenied);
  });
});