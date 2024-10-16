const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function () {});

// Test calculation functions
describe('Calculator Calculation Functions', function () {
  const res = calculator.calculateSquareRoot(4);
  it('should return 2', function () {
    assert.strictEqual(res, 2);
  });
});

describe('tan function', function () {
  it('tan(2) should be close to 0.017455064', function () {
    const res = calculator.tangent(1);
    assert.closeTo(res, 0.017455064, 1e-8);
  });
});

describe('square function', function () {
  const res = calculator.calculateSquare(3);
  it('should return 9', function () {
    assert.strictEqual(res, 9);
  });
});

describe('square root function', function () {
  const res = calculator.calculateSquareRoot(9);
  it('should return 3', function () {
    assert.strictEqual(res, 3);
  });
});
