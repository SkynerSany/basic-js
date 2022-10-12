const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str.length) return '';
  let result = '';

  for (let i= 0; i < str.length; i++) {
    let j = i;
    let count = 0;
    while (str[j] === str[j + 1]) {
      j++;
      count++;
    }

    result += count ? count + 1 + str[j] : str[j];
    i = j;
  }

  return result;
}

module.exports = {
  encodeLine
};
