const { BasePage } = require('./BasePage');

class AppPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.getByTestId('title');
    this.cartLink = page.getByTestId('shopping-cart-link');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.backToProductsButton = page.getByTestId('back-to-products');
  }

  async openCart() {
    await this.cartLink.click();
  }

  async backToProducts() {
    await this.backToProductsButton.click();
  }
}

module.exports = { AppPage };