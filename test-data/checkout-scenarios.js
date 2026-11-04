const { customers } = require('./customers');
const { checkoutErrors } = require('./messages');

const missingFieldScenarios = [
  {
    name: 'first name',
    customer: { ...customers.standard, firstName: '' },
    error: checkoutErrors.firstNameRequired,
  },
  {
    name: 'last name',
    customer: { ...customers.standard, lastName: '' },
    error: checkoutErrors.lastNameRequired,
  },
  {
    name: 'postal code',
    customer: { ...customers.standard, postalCode: '' },
    error: checkoutErrors.postalCodeRequired,
  },
];

module.exports = { missingFieldScenarios };