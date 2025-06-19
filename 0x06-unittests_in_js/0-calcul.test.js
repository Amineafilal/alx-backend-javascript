const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
    assert.strictEqual(calculateNumber(-1.4, 3.6), 3);
  });

  it('should handle zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
    assert.strictEqual(calculateNumber(0.8, 0.9), 2);
  });

  it('should handle large numbers', () => {
    assert.strictEqual(calculateNumber(10.3, 20.6), 31);
    assert.strictEqual(calculateNumber(99.5, 100.5), 201);
  });
});