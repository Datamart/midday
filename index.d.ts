// typescript

/**
 * The time string in "hh:mm" or "hhmm" format.
 */
type time = string;


/**
 * Converts 24-hour (military) time string to 12-hour (meridiem) time string.
 * @param {string} time The time string ("00:30", "01:45", "12:00", "22:15").
 * @return {string} Return converted 24-hour time string to 12-hour time.
 * @throws {Error} Will throw an error if the time string is invalid.
 */
export declare function convert(time: time): string;
