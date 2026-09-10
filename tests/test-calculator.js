const assert = require('assert');
const { calculatePayout } = require('../app.js');

assert.deepStrictEqual(calculatePayout(100, 40, 0), {
  storeEarnings: 40,
  consignorEarnings: 60,
  effectiveSplit: 60
});

assert.deepStrictEqual(calculatePayout(100, 40, 5), {
  storeEarnings: 38,
  consignorEarnings: 57,
  effectiveSplit: 60
});

assert.deepStrictEqual(calculatePayout(100, 0, 0), {
  storeEarnings: 0,
  consignorEarnings: 100,
  effectiveSplit: 100
});

assert.deepStrictEqual(calculatePayout(100, 100, 0), {
  storeEarnings: 100,
  consignorEarnings: 0,
  effectiveSplit: 0
});

assert.deepStrictEqual(calculatePayout(0, 50, 0), {
  storeEarnings: 0,
  consignorEarnings: 0,
  effectiveSplit: 50
});

assert.deepStrictEqual(calculatePayout(50, 50, 60), {
  storeEarnings: 0,
  consignorEarnings: 0,
  effectiveSplit: 50
});

assert.deepStrictEqual(calculatePayout(-100, -20, -5), {
  storeEarnings: 0,
  consignorEarnings: 0,
  effectiveSplit: 100
});

assert.deepStrictEqual(calculatePayout(100, 140, 0), {
  storeEarnings: 100,
  consignorEarnings: 0,
  effectiveSplit: 0
});

console.log('calculator tests passed');
