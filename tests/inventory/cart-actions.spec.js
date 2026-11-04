const { test, expect } = require('../../fixtures');
const { products } = require('../../test-data/products');

test.describe('Cart actions on the products page', () => {
  test('adding a product switches its button to Remove and sets the cart badge to 1', async ({ loggedInInventoryPage }) => {
    await loggedInInventoryPage.addToCart(products.backpack.name);

    await expect(loggedInInventoryPage.removeButton(products.backpack.name)).toBeVisible();
    await expect(loggedInInventoryPage.addToCartButton(products.backpack.name)).toBeHidden();
    await expect(loggedInInventoryPage.cartBadge).toHaveText('1');
  });

  test('adding several products increases the cart badge count', async ({ loggedInInventoryPage }) => {
    await loggedInInventoryPage.addToCart(products.backpack.name);
    await loggedInInventoryPage.addToCart(products.bikeLight.name);
    await loggedInInventoryPage.addToCart(products.boltTShirt.name);

    await expect(loggedInInventoryPage.cartBadge).toHaveText('3');
  });

  test('removing a product restores its Add to cart button and clears the badge', async ({ loggedInInventoryPage }) => {
    await loggedInInventoryPage.addToCart(products.onesie.name);
    await loggedInInventoryPage.removeFromCart(products.onesie.name);

    await expect(loggedInInventoryPage.addToCartButton(products.onesie.name)).toBeVisible();
    await expect(loggedInInventoryPage.cartBadge).toBeHidden();
  });

  test('removing one of two products decreases the cart badge count', async ({ loggedInInventoryPage }) => {
    await loggedInInventoryPage.addToCart(products.backpack.name);
    await loggedInInventoryPage.addToCart(products.fleeceJacket.name);
    await loggedInInventoryPage.removeFromCart(products.backpack.name);

    await expect(loggedInInventoryPage.cartBadge).toHaveText('1');
  });
});