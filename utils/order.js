const { formatPrice } = require('./format');

const TAX_RATE = 0.08;

const toCents = (price) => Math.round(price * 100);
const toLabel = (cents) => formatPrice(cents / 100);

const calculateOrderTotals = (items) => {
  const subtotal = items.reduce((sum, item) => sum + toCents(item.price), 0);
  const tax = Math.round(subtotal * TAX_RATE);

  return {
    subtotal: `Item total: ${toLabel(subtotal)}`,
    tax: `Tax: ${toLabel(tax)}`,
    total: `Total: ${toLabel(subtotal + tax)}`,
  };
};

module.exports = { calculateOrderTotals };