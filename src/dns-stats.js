const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  function rep(domain) {
    if(!result[`.${domain}`]) result[`.${domain}`] = domains.filter(item => item.includes(`${domain}`)).length;
    domain = domain.split('.');
    domain.splice(-1, 1);
    domain = domain.join('.');

    if (domain.length > 0) {
      rep(domain);
    }
  }

  domains = domains.map((item) => item.split('.').reverse().join('.'))
  domains.forEach((domain) => {
    rep(domain);
  })
  return result;
}

getDNSStats(['epam.com'])

module.exports = {
  getDNSStats
};
