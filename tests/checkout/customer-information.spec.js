const { test, expect } = require('../../fixtures');
const { customers } = require('../../test-data/customers');
const { missingFieldScenarios } = require('../../test-data/checkout-scenarios');
const { site } = require('../../test-data/site');

test.describe('Checkout customer information', () => {
  test('checkout from the cart opens the customer information form', async ({ checkoutInfoPageReady, page }) => {
    await expect(page).toHaveURL(/checkout-step-one\.html/);
    await expect(checkoutInfoPageReady.heading).toHaveText(site.checkoutInfoHeading);
  });

  for (const scenario of missingFieldScenarios) {
    test(`shows an error when the ${scenario.name} is missing`, async ({ checkoutInfoPageReady, page }) => {
      await checkoutInfoPageReady.fillInformation(scenario.customer);
      await checkoutInfoPageReady.continueToOverview();

      await expect(checkoutInfoPageReady.errorMessage).toHaveText(scenario.error);
      await expect(page).toHaveURL(/checkout-step-one\.html/);
    });
  }

  test('valid customer information continues to the order overview', async ({ checkoutInfoPageReady, page }) => {
    await checkoutInfoPageReady.fillInformation(customers.standard);
    await checkoutInfoPageReady.continueToOverview();

    await expect(page).toHaveURL(/checkout-step-two\.html/);
  });

  test('cancel returns to the cart', async ({ checkoutInfoPageReady, page }) => {
    await checkoutInfoPageReady.cancel();

    await expect(page).toHaveURL(/cart\.html/);
  });
});