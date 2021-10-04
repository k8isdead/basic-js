import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let count = {};
  for (let item of domains) {
    let itemSplit = item.split('.').reverse().map(i => '.' + i);
    let fragments = [];
    for (let j = 0; j < itemSplit.length; j++) {
      fragments.push(itemSplit[j]);
      let fragment = fragments.join('');
      if (!count[fragment]) {
        count[fragment] = 1;
      } else {
        count[fragment] += 1;
      }
    }
  }
  return count;
}
