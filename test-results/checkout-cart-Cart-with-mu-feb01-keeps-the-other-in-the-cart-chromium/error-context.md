# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\cart.spec.js >> Cart with multiple products >> removing one product keeps the other in the cart
- Location: tests\checkout\cart.spec.js:20:3

# Error details

```
TypeError: Cannot read properties of undefined (reading 'toLowerCase')
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [aria-hidden] [ref=e10]:
              - navigation [ref=e12]:
                - button [ref=e13] [cursor=pointer]: All Items
                - button [ref=e14] [cursor=pointer]: Dynamic Catalog
                - link [ref=e16] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - button [ref=e17] [cursor=pointer]: Logout
                - button [ref=e18] [cursor=pointer]: Reset App State
              - button [ref=e20] [cursor=pointer]: Close Menu
        - generic [ref=e22]: Swag Labs
        - button "Cart, empty" [ref=e25]
      - generic [ref=e26]:
        - generic [ref=e27]: Products
        - generic [ref=e29] [cursor=pointer]:
          - generic [ref=e30]: Name (A to Z)
          - combobox "Sort products" [ref=e31]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - main [ref=e32]:
      - generic [ref=e35]:
        - generic [ref=e36]:
          - button "View details for Sauce Labs Backpack" [ref=e38] [cursor=pointer]:
            - img "Sauce Labs Backpack"
          - generic [ref=e39]:
            - generic [ref=e40]:
              - button "View details for Sauce Labs Backpack" [ref=e41] [cursor=pointer]:
                - generic [ref=e42]: Sauce Labs Backpack
              - generic [ref=e43]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e44]:
              - generic [ref=e45]: $29.99
              - button "Add to cart" [ref=e46] [cursor=pointer]
        - generic [ref=e47]:
          - button "View details for Sauce Labs Bike Light" [ref=e49] [cursor=pointer]:
            - img "Sauce Labs Bike Light" [ref=e50]
          - generic [ref=e51]:
            - generic [ref=e52]:
              - button "View details for Sauce Labs Bike Light" [ref=e53] [cursor=pointer]:
                - generic [ref=e54]: Sauce Labs Bike Light
              - generic [ref=e55]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e56]:
              - generic [ref=e57]: $9.99
              - button "Add to cart" [ref=e58] [cursor=pointer]
        - generic [ref=e59]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e61] [cursor=pointer]:
            - img "Sauce Labs Bolt T-Shirt" [ref=e62]
          - generic [ref=e63]:
            - generic [ref=e64]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e65] [cursor=pointer]:
                - generic [ref=e66]: Sauce Labs Bolt T-Shirt
              - generic [ref=e67]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e68]:
              - generic [ref=e69]: $15.99
              - button "Add to cart" [ref=e70] [cursor=pointer]
        - generic [ref=e71]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e73] [cursor=pointer]:
            - img "Sauce Labs Fleece Jacket" [ref=e74]
          - generic [ref=e75]:
            - generic [ref=e76]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e77] [cursor=pointer]:
                - generic [ref=e78]: Sauce Labs Fleece Jacket
              - generic [ref=e79]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e80]:
              - generic [ref=e81]: $49.99
              - button "Add to cart" [ref=e82] [cursor=pointer]
        - generic [ref=e83]:
          - button "View details for Sauce Labs Onesie" [ref=e85] [cursor=pointer]:
            - img "Sauce Labs Onesie"
          - generic [ref=e86]:
            - generic [ref=e87]:
              - button "View details for Sauce Labs Onesie" [ref=e88] [cursor=pointer]:
                - generic [ref=e89]: Sauce Labs Onesie
              - generic [ref=e90]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e91]:
              - generic [ref=e92]: $7.99
              - button "Add to cart" [ref=e93] [cursor=pointer]
        - generic [ref=e94]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e96] [cursor=pointer]:
            - img "Test.allTheThings() T-Shirt (Red)"
          - generic [ref=e97]:
            - generic [ref=e98]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e99] [cursor=pointer]:
                - generic [ref=e100]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e101]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e102]:
              - generic [ref=e103]: $15.99
              - button "Add to cart" [ref=e104] [cursor=pointer]
  - contentinfo [ref=e105]:
    - list [ref=e106]:
      - listitem [ref=e107]:
        - link "X" [ref=e108] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e109]:
        - link "Facebook" [ref=e110] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e111]:
        - link "LinkedIn" [ref=e112] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e113]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | const { ItemListPage } = require('./ItemListPage');
  2  | 
  3  | class InventoryPage extends ItemListPage {
  4  |   constructor(page) {
  5  |     super(page);
  6  |     this.sortDropdown = page.getByTestId('product-sort-container');
  7  |   }
  8  | 
  9  |   async open() {
  10 |     await super.open('/inventory.html');
  11 |   }
  12 | 
  13 |   addToCartButton(name) {
> 14 |     const testId = `add-to-cart-${name.toLowerCase().replaceAll(' ', '-')}`;
     |                                        ^ TypeError: Cannot read properties of undefined (reading 'toLowerCase')
  15 |     return this.page.getByTestId(testId);
  16 |   }
  17 | 
  18 |   async addToCart(name) {
  19 |     await this.addToCartButton(name).click();
  20 |   }
  21 | 
  22 |   async sortBy(option) {
  23 |     await this.sortDropdown.selectOption(option);
  24 |   }
  25 | 
  26 |   async openProduct(name) {
  27 |     return this.item(name).getByTestId('inventory-item-name').click();
  28 |   }
  29 | }
  30 | 
  31 | module.exports = { InventoryPage };
```