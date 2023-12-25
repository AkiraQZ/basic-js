const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nString = n.toString();
  let nArray = [];
  for (let i = 0; i < nString.length; i++) {
    let template = nString.slice(0, i) + nString.slice(i + 1);
    nArray.push(parseInt(template));
  }
  let max = Math.max(...nArray);
  return max;
}

module.exports = {
  deleteDigit
};
