import * as assert from "assert";
import { convert } from "midday";

const runTests = () => {
  assert.strictEqual(convert("00:00"), "12:00 AM");
  assert.strictEqual(convert("00:01"), "12:01 AM");
  assert.strictEqual(convert("00:30"), "12:30 AM");
  assert.strictEqual(convert("01:15"), "1:15 AM");
  assert.strictEqual(convert("11:45"), "11:45 AM");
  assert.strictEqual(convert("12:15"), "12:15 PM");
  assert.strictEqual(convert("13:15"), "1:15 PM");
  assert.strictEqual(convert("23:15"), "11:15 PM");

  assert.strictEqual(convert("0000"), "12:00 AM");
  assert.strictEqual(convert("0030"), "12:30 AM");
  assert.strictEqual(convert("1315"), "1:15 PM");
  assert.strictEqual(convert("2315"), "11:15 PM");

  assert.throws(
    () => convert("24:00"),
    Error,
    "Should throw an error if the time string is invalid."
  );
  assert.throws(
    () => convert("10:95"),
    Error,
    "Should throw an error if the time string is invalid."
  );
};

runTests();
