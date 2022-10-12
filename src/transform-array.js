const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");

  let result = [];
  let newArr = new Array(...arr);

  const option = {
    '--discard-next': (i) => {
      if (i + 1 < newArr.length) newArr[i + 1] = '';
    },

    '--discard-prev': (i) => {
      if (i !== 0) result = result.slice(0, i - 1);
    },

    '--double-next': (i) => {
      if (i + 1 < newArr.length) result.push(newArr[i + 1]);
    },

    '--double-prev': (i) => {
      if (i !== 0) result.push(newArr[i - 1]);
    },
  }

  newArr.forEach((item, i) => {
    if (option[item]) {
      option[item](i);
    } else {
      result.push(item);
    }
  })

  
  return result.filter(item => item !== '');
}

transform(['--double-prev', 1, 2, 3])

module.exports = {
  transform
};
