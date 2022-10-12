const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const separator = options.separator ? options.separator : "+";
  const additionSeparator = options.additionSeparator ? options.additionSeparator : "|";

  if (options.additionRepeatTimes > 0) {
    for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
      str += `${options.addition}${additionSeparator}`;
    }
    
    str += options.addition;
  } 
  
  if (options.additionRepeatTimes === undefined && options.addition) {
    str += options.addition;
  }

  let result = str;

  for (let i = 0; i < options.repeatTimes - 1; i++) {
    result += `${separator}${str}`;
  }

  return result;
}

module.exports = {
  repeater
};
