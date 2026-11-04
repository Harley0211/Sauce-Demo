const loginErrors = {
  usernameRequired: 'Epic sadface: Username is required',
  passwordRequired: 'Epic sadface: Password is required',
  invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
  lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
  accessDenied: "Epic sadface: You can only access '/inventory.html' when you are logged in.",
};

const checkoutErrors = {
  firstNameRequired: 'Error: First Name is required',
  lastNameRequired: 'Error: Last Name is required',
  postalCodeRequired: 'Error: Postal Code is required',
};

const orderMessages = {
  payment: 'SauceCard #31337',
  shipping: 'Free Pony Express Delivery!',
  confirmationTitle: 'Thank you for your order!',
  confirmationText: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
};

module.exports = { loginErrors, checkoutErrors, orderMessages };