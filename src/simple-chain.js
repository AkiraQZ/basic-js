const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
let array = [];
let result;
const chainMaker = {
  getLength() {
    return array.length;
  },
  addLink(value) {
    array.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position === undefined || position < 1 || position > array.length) {
      throw new Error(`"You can't remove an incorrect link!"`);
    } else {
      array.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    array.reverse();
    return this;
  },
  finishChain() {
    const modifiedArray = array.map(element => `( ${element} )`);
    result = modifiedArray.join('~~');
    array = [];
    return result;
  }
};


module.exports = {
  chainMaker
};
