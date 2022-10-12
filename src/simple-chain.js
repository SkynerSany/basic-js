const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  string: [],
  result: [],

  getLength() {
    return this.string.length;
  },

  addLink(value = '') {
    this.string.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (position > 0 && position < this.getLength() && typeof(position) === 'number') {
      this.string.splice(position - 1, 1);
      return this;
    } else {
      this.string = [];
      throw new Error('You can\'t remove incorrect link!');
    }
  },

  reverseChain() {
    this.string.reverse();
    return this;
  },

  finishChain() {
    this.result = new Array(...this.string).join('~~');
    this.string = [];
    return this.result;
  },
};

module.exports = {
  chainMaker
};
