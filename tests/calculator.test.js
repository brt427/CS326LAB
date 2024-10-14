const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});


describe('square function', function() {
  const res = calculator.calculateSquare(3);
  it('should return 9', function() {
    assert.strictEqual(res, 9);
  });
});

describe('square root function', function() {
  const res = calculator.calculateSquareRoot(9);
  it('should return 3', function() {
    assert.strictEqual(res, 3);
  });
});

 
describe('Reciprocal function test', function() {
  const res = calculator.calculateReciprocal(10);
  it('should return 0.1', function() {
    assert.strictEqual(res, 0.1);
  });
});
