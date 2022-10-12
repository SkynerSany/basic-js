const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = email.slice(email.lastIndexOf('@') + 1);
  return result[0] === '.' ? result.slice(1) : result;
}

module.exports = {
  getEmailDomain
};
