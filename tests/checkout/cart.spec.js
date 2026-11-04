const { test, expect } = require('../../fixtures');
const { products } = require('../../test-data/products');
const { formatPrice } = require('../../utils/format');
const { site } = require('../../test-data/site');

const selectedProducts = [products.backpack, products.bikeLight];

test.describe('Cart with multiple products', () => {
  test.use({ cartProducts: [selectedProducts] });
    test('lists each added product with its name, price and quantity', async ({ cartPageWithItems, page }) => {
    await expect(page).toHaveURL(/cart\.html/);
    await expect(cartPageWithItems.heading).toHaveText(site.cartHeading);
    await expect(cartPageWithItems.itemNames).toHaveText(selectedProducts.map((product) => product.name));
    await expect(cartPageWithItems.itemPrices).toHaveText(
      selectedProducts.map((product) => formatPrice(product.price))
    );
    await expect(cartPageWithItems.quantities).toHaveText(selectedProducts.map(() => '1'));
  });

  test('removing one product keeps the other in the cart', async ({ cartPageWithItems }) => {
    await cartPageWithItems.removeFromCart(products.backpack.name);

    await expect(cartPageWithItems.itemNames).toHaveText([products.bikeLight.name]);
    await expect(cartPageWithItems.cartBadge).toHaveText('1');
  });

  test('continue shopping returns to the products page', async ({ cartPageWithItems, page }) => {
    await cartPageWithItems.continueShopping();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(cartPageWithItems.heading).toHaveText(site.inventoryHeading);
  });
});

test.describe('Cart with a single product', () => {
  test('removing the only product empties the cart', async ({ cartPageWithItems }) => {
    await cartPageWithItems.removeFromCart(products.backpack.name);

    await expect(cartPageWithItems.items).toHaveCount(0);
    await expect(cartPageWithItems.cartBadge).toBeHidden();
  });
});