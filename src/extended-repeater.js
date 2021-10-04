import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  let additionalStr = '';
  let resultingStr = '';

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.separator) {
    options.separator = '+';
  }

  if (!options.additionSeparator ) {
    options.additionSeparator  = '|';
  }

  if (!options.additionRepeatTimes ) {
    options.additionRepeatTimes  = '1';
  }

  if (options.addition === undefined) {
    options.addition = "";
  }
  for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
    additionalStr += options.addition + options.additionSeparator;
  }
  additionalStr += options.addition;
  for (let j = 0; j < options.repeatTimes - 1; j++) {
    resultingStr += str + additionalStr + options.separator;
  }
  resultingStr += str + additionalStr;
  return resultingStr;
}
