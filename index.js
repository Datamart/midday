/**
 * @fileoverview Converts 24-hour (military) time string to 12-hour (meridiem) time string.
 *
 * @see https://google.github.io/styleguide/javascriptguide.xml
 * @see https://developers.google.com/closure/compiler/docs/js-for-compiler
 * @see https://github.com/Datamart/midday
 * @module midday
 */


/**
 * Converts 24-hour (military) time string to 12-hour (meridiem) time string.
 * @param {string} time The time string ("00:30", "01:45", "12:00", "22:15").
 * @return {string} Return converted 24-hour time string to 12-hour time.
 * @throws {!Error} Will throw an error if the time string is invalid.
 * @method
 * @example
 * convert('00:30'); // 12:30 AM
 * convert('01:15'); // 1:15 AM
 * convert('11:45'); // 11:45 AM
 * convert('12:15'); // 12:15 PM
 * convert('13:15'); // 1:15 PM
 * convert('23:15'); // 11:15 PM
 * convert('0030'); // 12:30 AM
 * convert('2315'); // 11:15 PM
 */
export const convert = (time) => {
  const re = /^([012][0123])\D?([012345]\d)$/;
  if (re.test(time)) {
    const parts = time.split(re);
    const hours = parts[1];
    const mins = parts[2];
    return (hours % 12 || 12) + ':' + mins + ' ' + (12 > hours ? 'AM' : 'PM');
  }

  throw new Error('Invalid time input: ' + time);
};
