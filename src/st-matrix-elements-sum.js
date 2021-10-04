import { NotImplementedError } from '../extensions/index.js';

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
export default function getMatrixElementsSum(matrix) {
  let transposedMatrix = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  let result = 0;
  transposedMatrix.forEach((row) => {
    let i = 0;
    while (i < row.length && row[i] > 0) {
      result += row[i];
      i++;
    }
  })
  return result;
}
