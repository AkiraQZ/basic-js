const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let previousArray = [];
  let array = []
  for (let i = 0; i < matrix.length; i++) {
    array = matrix[i]
    previousArray = matrix[i-1];
    if (i < 0) {
      result += array.reduce((a, b) => a + b, 0)
    } else {
    array = matrix[i];
    for (let a = 0; a < array.length; a++) {
      if (!previousArray || previousArray[a] !== 0){
        result += array[a];
      }
    }
  }
}
return result;
}
module.exports = {
  getMatrixElementsSum
};
