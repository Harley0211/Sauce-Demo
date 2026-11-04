const { test, expect } = require('../../fixtures');
const { products, catalog } = require('../../test-data/products');
const { formatPrice } = require('../../utils/format');

const PRODUCT_DETAILS_URL = /inventory-item\.html/;

test.describe('Product details', () => {
  for (const product of catalog) {
    test(`opening ${product.name} shows its name, description and price`, async ({
      loggedInInventoryPage,
      productDetailsPage,
      page,
    }) => {
      await loggedInInventoryPage.openProduct(product.name);

      await expect(page).toHaveURL(PRODUCT_DETAILS_URL);
      await expect(productDetailsPage.name).toHaveText(product.name);
      await expect(productDetailsPage.price).toHaveText(formatPrice(product.price));
      await expect(productDetailsPage.description).not.toBeEmpty();
    });
  }

  test('back to products returns to the product listing', async ({
    loggedInInventoryPage,
    productDetailsPage,
    page,
  }) => {
    await loggedInInventoryPage.openProduct(products.backpack.name);
    await expect(page).toHaveURL(PRODUCT_DETAILS_URL);

    await productDetailsPage.backToProducts();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(loggedInInventoryPage.items).toHaveCount(catalog.length);
  });

  test('a product added from its details page shows as added on the listing', async ({
    loggedInInventoryPage,
    productDetailsPage,
    page,
  }) => {
    await loggedInInventoryPage.openProduct(products.bikeLight.name);
    await expect(page).toHaveURL(PRODUCT_DETAILS_URL);

    await productDetailsPage.addToCart();

    await expect(productDetailsPage.removeButton).toBeVisible();
    await expect(productDetailsPage.cartBadge).toHaveText('1');

    await productDetailsPage.backToProducts();

    await expect(loggedInInventoryPage.removeButton(products.bikeLight.name)).toBeVisible();
  });
});