const { users } = require('./users');
const { loginErrors } = require('./messages');

const invalidLoginScenarios = [
  {
    name: 'a wrong password',
    credentials: { username: users.standard.username, password: users.unknown.password },
    error: loginErrors.invalidCredentials,
  },
  {
    name: 'an unknown username',
    credentials: users.unknown,
    error: loginErrors.invalidCredentials,
  },
  {
    name: 'an empty username',
    credentials: { username: '', password: users.standard.password },
    error: loginErrors.usernameRequired,
  },
  {
    name: 'an empty password',
    credentials: { username: users.standard.username, password: '' },
    error: loginErrors.passwordRequired,
  },
  {
    name: 'both fields empty',
    credentials: { username: '', password: '' },
    error: loginErrors.usernameRequired,
  },
];

module.exports = { invalidLoginScenarios };