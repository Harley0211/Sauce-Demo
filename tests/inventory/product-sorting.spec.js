const { test, expect } = require('../../fixtures');
const { sortScenarios } = require('../../test-data/sort-scenarios');

test.describe('Product sorting', () => {
  for (const scenario of sortScenarios) {
    test(`sorts products by ${scenario.label}`, async ({ loggedInInventoryPage }) => {
      await loggedInInventoryPage.sortBy(scenario.option);

      await expect(loggedInInventoryPage[scenario.column]).toHaveText(scenario.expected);
    });
  }
});