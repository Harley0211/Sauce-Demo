const { test, expect } = require('../../fixtures');
const { orderMessages } = require('../../test-data/messages');
const { site } = require('../../test-data/site');

test.describe('Order completion', () => {
  test('finishing the order shows the confirmation and empties the cart', async ({
    checkoutOverviewPageReady,
    checkoutCompletePage,
    page,
  }) => {
    await checkoutOverviewPageReady.finish();

    await expect(page).toHaveURL(/checkout-complete\.html/);
    await expect(checkoutCompletePage.heading).toHaveText(site.completeHeading);
    await expect(checkoutCompletePage.confirmationTitle).toHaveText(orderMessages.confirmationTitle);
    await expect(checkoutCompletePage.confirmationText).toHaveText(orderMessages.confirmationText);
    await expect(checkoutCompletePage.cartBadge).toBeHidden();
  });

  test('back home after ordering returns to the products page with an empty cart', async ({
    checkoutOverviewPageReady,
    checkoutCompletePage,
    page,
  }) => {
    await checkoutOverviewPageReady.finish();
    await checkoutCompletePage.backToProducts();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(checkoutCompletePage.cartBadge).toBeHidden();
  });
});