import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const splitString = s1.split('');
  for(let i = 0; i < s2.length; i++) {
    if(splitString.includes(s2[i])) {
      splitString.splice(splitString.indexOf(s2[i]), 1);
      result++;
    }
  }
  return result;
}
