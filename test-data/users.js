const PASSWORD = 'secret_sauce';

const users = {
  standard: { username: 'standard_user', password: PASSWORD },
  lockedOut: { username: 'locked_out_user', password: PASSWORD },
  unknown: { username: 'unknown_user', password: 'wrong_password' },
};

module.exports = { users };