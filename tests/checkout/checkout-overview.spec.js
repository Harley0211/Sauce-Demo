const { test, expect } = require('../../fixtures');
const { products } = require('../../test-data/products');
const { orderMessages } = require('../../test-data/messages');
const { formatPrice } = require('../../utils/format');
const { calculateOrderTotals } = require('../../utils/order');
const { site } = require('../../test-data/site');

const selectedProducts = [products.backpack, products.onesie];

test.describe('Checkout overview', () => {
  test.use({ cartProducts: [selectedProducts] });

  test('lists the ordered products with their names and prices', async ({ checkoutOverviewPageReady, page }) => {
    await expect(page).toHaveURL(/checkout-step-two\.html/);
    await expect(checkoutOverviewPageReady.heading).toHaveText(site.overviewHeading);
    await expect(checkoutOverviewPageReady.itemNames).toHaveText(
      selectedProducts.map((product) => product.name)
    );
    await expect(checkoutOverviewPageReady.itemPrices).toHaveText(
      selectedProducts.map((product) => formatPrice(product.price))
    );
  });

  test('shows the payment and shipping information', async ({ checkoutOverviewPageReady }) => {
    await expect(checkoutOverviewPageReady.paymentInfo).toHaveText(orderMessages.payment);
    await expect(checkoutOverviewPageReady.shippingInfo).toHaveText(orderMessages.shipping);
  });

  test('shows the item total, tax and order total', async ({ checkoutOverviewPageReady }) => {
    const totals = calculateOrderTotals(selectedProducts);

    await expect(checkoutOverviewPageReady.subtotal).toHaveText(totals.subtotal);
    await expect(checkoutOverviewPageReady.tax).toHaveText(totals.tax);
    await expect(checkoutOverviewPageReady.total).toHaveText(totals.total);
  });

  test('cancel returns to the products page and keeps the cart', async ({ checkoutOverviewPageReady, page }) => {
    await checkoutOverviewPageReady.cancel();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(checkoutOverviewPageReady.cartBadge).toHaveText(String(selectedProducts.length));
  });
});