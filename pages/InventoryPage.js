const { ItemListPage } = require('./ItemListPage');

class InventoryPage extends ItemListPage {
  constructor(page) {
    super(page);
    this.sortDropdown = page.getByTestId('product-sort-container');
  }

  async open() {
    await super.open('/inventory.html');
  }

  addToCartButton(name) {
    const testId = `add-to-cart-${name.toLowerCase().replaceAll(' ', '-')}`;
    return this.page.getByTestId(testId);
  }

  async addToCart(name) {
    await this.addToCartButton(name).click();
  }

  async sortBy(option) {
    await this.sortDropdown.selectOption(option);
  }

  async openProduct(name) {
    return this.item(name).getByTestId('inventory-item-name').click();
  }
}

module.exports = { InventoryPage };