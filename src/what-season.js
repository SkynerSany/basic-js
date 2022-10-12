const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = ['winter', 'spring', 'summer', 'autumn'];

  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('Invalid date!');

  if (Object.getOwnPropertyNames(date).length !== Object.getOwnPropertyNames(new Date).length) throw new Error('Invalid date!');
  const month = date.getMonth();

  return (month >= 11 || month < 2) ? season[0] : 
    (month >= 2 && month < 5) ? season[1] : 
    (month >= 5 && month < 8) ? season[2] : season[3];
}

module.exports = {
  getSeason
};
