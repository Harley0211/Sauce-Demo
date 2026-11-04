const { test, expect } = require('../../fixtures');
const { catalog } = require('../../test-data/products');
const { formatPrice } = require('../../utils/format');
const { site } = require('../../test-data/site');

test.describe('Product listing', () => {
  test('products page lists every product with its name and price', async ({ loggedInInventoryPage }) => {
    await expect(loggedInInventoryPage.items).toHaveCount(catalog.length);
    await expect(loggedInInventoryPage.itemNames).toHaveText(catalog.map((product) => product.name));
    await expect(loggedInInventoryPage.itemPrices).toHaveText(
      catalog.map((product) => formatPrice(product.price))
    );
  });

  test('a new session shows the products heading and an empty cart', async ({ loggedInInventoryPage }) => {
    await expect(loggedInInventoryPage.heading).toHaveText(site.inventoryHeading);
    await expect(loggedInInventoryPage.cartBadge).toBeHidden();
  });
});