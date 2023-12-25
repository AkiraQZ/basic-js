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
  return arr.map((item, idx, arr) => {
    if (item === '--double-next') {
      return arr[idx + 1] * 2;
    } else if (item === '--double-prev') {
      return arr[idx - 1] * 2;
    } else if (item === '--discard-next') {
      return arr[idx + 1];
    } else if (item === '--discard-prev') {
      return arr[idx - 1];
    } else {
      return item;
    }
  });
}

module.exports = {
  transform
};
