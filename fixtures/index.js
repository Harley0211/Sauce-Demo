const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutInfoPage } = require('../pages/CheckoutInfoPage');
const { CheckoutOverviewPage } = require('../pages/CheckoutOverviewPage');
const { CheckoutCompletePage } = require('../pages/CheckoutCompletePage');
const { users } = require('../test-data/users');
const { products } = require('../test-data/products');
const { customers } = require('../test-data/customers');

const test = base.test.extend({
  cartProducts: [
  [products.backpack],
  { option: true },
],

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutInfoPage: async ({ page }, use) => {
    await use(new CheckoutInfoPage(page));
  },

  checkoutOverviewPage: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },

  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },

  loggedInInventoryPage: async ({ loginPage, inventoryPage }, use) => {
    await loginPage.open();
    await loginPage.login(users.standard);
    await use(inventoryPage);
  },

  cartPageWithItems: async ({ loggedInInventoryPage, cartPage, cartProducts }, use) => {
    for (const product of cartProducts) {
      await loggedInInventoryPage.addToCart(product.name);
    }
    await loggedInInventoryPage.openCart();
    await use(cartPage);
  },

  checkoutInfoPageReady: async ({ cartPageWithItems, checkoutInfoPage }, use) => {
    await cartPageWithItems.checkout();
    await use(checkoutInfoPage);
  },

  checkoutOverviewPageReady: async ({ checkoutInfoPageReady, checkoutOverviewPage }, use) => {
    await checkoutInfoPageReady.fillInformation(customers.standard);
    await checkoutInfoPageReady.continueToOverview();
    await use(checkoutOverviewPage);
  },

  debugPause: [
    async ({ page }, use) => {
      await use();
      if (process.env.PAUSE === '1') {
        await page.pause();
      }
    },
    { auto: true },
  ],
});

module.exports = { test, expect: base.expect };