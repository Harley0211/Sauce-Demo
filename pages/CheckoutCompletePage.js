const { AppPage } = require('./AppPage');

class CheckoutCompletePage extends AppPage {
  constructor(page) {
    super(page);
    this.confirmationTitle = page.getByTestId('complete-header');
    this.confirmationText = page.getByTestId('complete-text');
  }
}

module.exports = { CheckoutCompletePage };