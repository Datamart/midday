# Meridiem time [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Meridiem%20time%20module%20from%20Glize%20library.&url=https://glize.js.org&via=GitHub&hashtags=Glize,JavaScript,ECMAScript,ES6)
[![Build Status](https://github.com/Datamart/midday/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Datamart/midday/actions/workflows/npm-publish.yml) [![License](https://img.shields.io/:license-apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.html) [![NPM version](https://img.shields.io/npm/v/midday.svg?style=flat)](https://npmjs.org/package/midday) [![Website](https://img.shields.io/website-up-down-green-red/https/glize.js.org.svg?style=flat)](https://glize.js.org) [![NPM downloads](https://img.shields.io/npm/dm/midday.svg?style=flat)](https://npmjs.org/package/midday)

Converts 24-hour (military) time string to 12-hour (meridiem) time string and vice versa..

## Usage

```bash
npm install midday --save
```

```js
import { toMeridiem, toMilitary } from 'midday';

/**
 * Converts 24-hour (military) time string to 12-hour (meridiem) time string.
 * @param {string} time The time string ("00:30", "01:45", "12:00", "22:15").
 * @return {string} Return converted 24-hour time string to 12-hour time.
 * @throws {Error} Will throw an error if the time string is invalid.
 */
toMeridiem('00:30'); // 12:30 AM
toMeridiem('01:15'); // 1:15 AM
toMeridiem('11:45'); // 11:45 AM
toMeridiem('12:15'); // 12:15 PM
toMeridiem('13:15'); // 1:15 PM
toMeridiem('23:15'); // 11:15 PM
toMeridiem('0030');  // 12:30 AM
toMeridiem('2315');  // 11:15 PM

/**
 * Converts 12-hour (meridiem) time string to 24-hour (military) time string.
 * @param {string} time The time string ("12:30 AM", "11:15 PM", "1:15 AM").
 * @return {string} Return converted 12-hour time string to 24-hour time.
 * @throws {!Error} Will throw an error if the time string is invalid.
 */
toMilitary('12:30 AM'); // 00:30
toMilitary('1:15 AM');  // 01:15
toMilitary('11:45 AM'); // 11:45
toMilitary('12:15 PM'); // 12:15
toMilitary('1:15 PM');  // 13:15
toMilitary('11:15 PM'); // 23:15
```

For more information please visit [Glize project page](https://glize.js.org).
