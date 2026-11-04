const { catalog } = require('./products');
const { formatPrice } = require('../utils/format');

const byName = [...catalog].sort((a, b) => a.name.localeCompare(b.name));
const byPrice = [...catalog].sort((a, b) => a.price - b.price);

const names = (list) => list.map((product) => product.name);
const prices = (list) => list.map((product) => formatPrice(product.price));

const sortScenarios = [
  { label: 'name from A to Z', option: 'az', column: 'itemNames', expected: names(byName) },
  { label: 'name from Z to A', option: 'za', column: 'itemNames', expected: names([...byName].reverse()) },
  { label: 'price from low to high', option: 'lohi', column: 'itemPrices', expected: prices(byPrice) },
  { label: 'price from high to low', option: 'hilo', column: 'itemPrices', expected: prices([...byPrice].reverse()) },
];

module.exports = { sortScenarios };
