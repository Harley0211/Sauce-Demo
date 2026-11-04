const { ItemListPage } = require('./ItemListPage');

class CartPage extends ItemListPage {
  constructor(page) {
    super(page);
    this.quantities = page.getByTestId('item-quantity');
    this.continueShoppingButton = page.getByTestId('continue-shopping');
    this.checkoutButton = page.getByTestId('checkout');
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };