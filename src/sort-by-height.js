const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  arr.forEach(item => newArr.push(item === -1 ? item : 0));
  arr = arr.filter(item => item !== -1);
  arr.sort((a, b) => a - b);
  
  let i = 0;
  return newArr.map(item => item === 0 ? arr[i++] : -1);
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
module.exports = {
  sortByHeight
};
