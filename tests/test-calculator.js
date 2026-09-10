const assert = require('assert');
const { calculatePayout } = require('../app.js');

assert.deepStrictEqual(calculatePayout(100, 40, 5), {
  storeEarnings: 57,
  consignorEarnings: 38,
  effectiveSplit: 40
});

assert.deepStrictEqual(calculatePayout(0, 50, 0), {
  storeEarnings: 0,
  consignorEarnings: 0,
  effectiveSplit: 50
});

console.log('calculator tests passed');
