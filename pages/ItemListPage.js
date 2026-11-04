const { AppPage } = require('./AppPage');

class ItemListPage extends AppPage {
  constructor(page) {
    super(page);
    this.items = page.getByTestId('inventory-item');
    this.itemNames = page.getByTestId('inventory-item-name');
    this.itemPrices = page.getByTestId('inventory-item-price');
  }

  item(name) {
    return this.items.filter({ hasText: name });
  }

  removeButton(name) {
    const testId = `remove-${name.toLowerCase().replaceAll(' ', '-')}`;
    return this.page.getByTestId(testId);
  }

  async removeFromCart(name) {
    await this.removeButton(name).click();
  }
}

module.exports = { ItemListPage };