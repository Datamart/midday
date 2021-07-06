/**
 * @fileoverview Converts 24-hour (military) time string to 12-hour 
 *               (meridiem) time string and vice versa.
 *
 * @see https://google.github.io/styleguide/javascriptguide.xml
 * @see https://developers.google.com/closure/compiler/docs/js-for-compiler
 * @see https://github.com/Datamart/midday
 * @module midday
 * @suppress {misplacedTypeAnnotation}
 */


/**
 * Converts 24-hour (military) time string to 12-hour (meridiem) time string.
 * @param {string} time The time string ("00:30", "01:45", "12:00", "22:15").
 * @return {string} Return converted 24-hour time string to 12-hour time.
 * @throws {!Error} Will throw an error if the time string is invalid.
 * @since 21.7.4
 * @method
 * @example
 * toMeridiem('00:30'); // 12:30 AM
 * toMeridiem('01:15'); // 1:15 AM
 * toMeridiem('11:45'); // 11:45 AM
 * toMeridiem('12:15'); // 12:15 PM
 * toMeridiem('13:15'); // 1:15 PM
 * toMeridiem('23:15'); // 11:15 PM
 * toMeridiem('0030');  // 12:30 AM
 * toMeridiem('2315');  // 11:15 PM
 */
export const toMeridiem = (time) => {
  const re = /^(([01]\d)|(2[0123]))\D?([012345]\d)$/;
  if (re.test(time)) {
    const parts = time.split(re);
    const hours = parts[1];
    const mins = parts[4];
    return (hours % 12 || 12) + ':' + mins + ' ' + (12 > hours ? 'AM' : 'PM');
  }

  throw new Error('Invalid time input: ' + time);
};

/**
 * Converts 12-hour (meridiem) time string to 24-hour (military) time string.
 * @param {string} time The time string ("12:30 AM", "11:15 PM", "1:15 AM").
 * @return {string} Return converted 12-hour time string to 24-hour time.
 * @throws {!Error} Will throw an error if the time string is invalid.
 * @since 21.7.4
 * @method
 * @example
 * toMilitary('12:30 AM'); // 00:30
 * toMilitary('1:15 AM');  // 01:15
 * toMilitary('11:45 AM'); // 11:45
 * toMilitary('12:15 PM'); // 12:15
 * toMilitary('1:15 PM');  // 13:15
 * toMilitary('11:15 PM'); // 23:15
 */
export const toMilitary = (time) => {
  const re = /^(([01][012])|(\d)):([012345]\d)\s?(a|p)m$/i;
  if (re.test(time)) {
    const parts = time.toLowerCase().split(re);
    const hours = (+parts[1] % 12) + ('p' == parts[5] ? 12 : 0);
    return ('0' + hours).slice(-2) + ':' + parts[4];
  }

  throw new Error('Invalid time input: ' + time);
};

export {
  /**
   * Alias of `toMeridiem`.
   * @see toMeridiem
   * @deprecated since version 21.7.4
   */
  toMeridiem as convert
};
