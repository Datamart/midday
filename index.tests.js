import * as assert from "assert";
import { toMeridiem, toMilitary } from "midday";

const testMeridiem = () => {
  assert.strictEqual(toMeridiem("00:00"), "12:00 AM");
  assert.strictEqual(toMeridiem("00:01"), "12:01 AM");
  assert.strictEqual(toMeridiem("00:30"), "12:30 AM");
  assert.strictEqual(toMeridiem("01:15"), "1:15 AM");
  assert.strictEqual(toMeridiem("11:45"), "11:45 AM");
  assert.strictEqual(toMeridiem("12:15"), "12:15 PM");
  assert.strictEqual(toMeridiem("13:15"), "1:15 PM");
  assert.strictEqual(toMeridiem("23:15"), "11:15 PM");

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
    () => toMeridiem("10:95"),
    Error,
    "Should throw an error if the time string is invalid."
  );
};

const testMilitary = () => {
  assert.strictEqual(toMilitary("12:00 AM"), "00:00");
  assert.strictEqual(toMilitary("12:01 AM"), "00:01");
  assert.strictEqual(toMilitary("12:30 AM"), "00:30");
  assert.strictEqual(toMilitary("1:15 AM"), "01:15");
  assert.strictEqual(toMilitary("11:45 AM"), "11:45");
  assert.strictEqual(toMilitary("12:00 PM"), "12:00");
  assert.strictEqual(toMilitary("12:15 PM"), "12:15");
  assert.strictEqual(toMilitary("1:15 PM"), "13:15");
  assert.strictEqual(toMilitary("11:15 PM"), "23:15");

  assert.throws(
    () => convert("41:15 PM"),
    Error,
    "Should throw an error if the time string is invalid."
  );
  assert.throws(
    () => convert("1:99 PM"),
    Error,
    "Should throw an error if the time string is invalid."
  );
};

const runTests = () => {
  testMeridiem();
  testMilitary();
};

runTests();
