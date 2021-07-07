import * as assert from "assert";
import { toMeridiem, toMilitary } from "midday";

const testMeridiem = () => {
  assert.strictEqual(toMeridiem("00:00"), "12:00 AM");
  assert.strictEqual(toMeridiem("00:01"), "12:01 AM");
  assert.strictEqual(toMeridiem("01:15"), "1:15 AM");
  assert.strictEqual(toMeridiem("02:30"), "2:30 AM");
  assert.strictEqual(toMeridiem("03:45"), "3:45 AM");
  assert.strictEqual(toMeridiem("11:59"), "11:59 AM");
  assert.strictEqual(toMeridiem("12:00"), "12:00 PM");
  assert.strictEqual(toMeridiem("13:15"), "1:15 PM");
  assert.strictEqual(toMeridiem("14:30"), "2:30 PM");
  assert.strictEqual(toMeridiem("15:45"), "3:45 PM");
  assert.strictEqual(toMeridiem("20:15"), "8:15 PM");
  assert.strictEqual(toMeridiem("21:30"), "9:30 PM");
  assert.strictEqual(toMeridiem("22:45"), "10:45 PM");
  assert.strictEqual(toMeridiem("23:59"), "11:59 PM");

  assert.strictEqual(toMeridiem("0000"), "12:00 AM");
  assert.strictEqual(toMeridiem("0030"), "12:30 AM");
  assert.strictEqual(toMeridiem("1315"), "1:15 PM");
  assert.strictEqual(toMeridiem("2315"), "11:15 PM");

  assert.throws(
    () => toMeridiem("24:00"),
    Error,
    "Should throw an error if the time string is invalid."
  );
  assert.throws(
    () => toMeridiem("29:00"),
    Error,
    "Should throw an error if the time string is invalid."
  );
  assert.throws(
    () => toMeridiem("10:95"),
    Error,
    "Should throw an error if the time string is invalid."
  );
};

const testMilitary = () => {
  assert.strictEqual(toMilitary("12:00 AM"), "00:00");
  assert.strictEqual(toMilitary("12:01 AM"), "00:01");
  assert.strictEqual(toMilitary("1:15 AM"), "01:15");
  assert.strictEqual(toMilitary("2:30 AM"), "02:30");
  assert.strictEqual(toMilitary("3:45 AM"), "03:45");
  assert.strictEqual(toMilitary("11:59 AM"), "11:59");
  assert.strictEqual(toMilitary("12:00 PM"), "12:00");
  assert.strictEqual(toMilitary("1:15 PM"), "13:15");
  assert.strictEqual(toMilitary("2:30 PM"), "14:30");
  assert.strictEqual(toMilitary("3:45 PM"), "15:45");
  assert.strictEqual(toMilitary("8:15 PM"), "20:15");
  assert.strictEqual(toMilitary("9:30 PM"), "21:30");
  assert.strictEqual(toMilitary("10:45 PM"), "22:45");
  assert.strictEqual(toMilitary("11:59 PM"), "23:59");

  assert.throws(
    () => toMilitary("14:15 PM"),
    Error,
    "Should throw an error if the time string is invalid."
  );
  assert.throws(
    () => toMilitary("41:15 PM"),
    Error,
    "Should throw an error if the time string is invalid."
  );
  assert.throws(
    () => toMilitary("1:99 PM"),
    Error,
    "Should throw an error if the time string is invalid."
  );
};

const runTests = () => {
  testMeridiem();
  testMilitary();
};

runTests();
