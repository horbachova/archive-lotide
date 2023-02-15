const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should return [2, 3, 4] when passed [1, 2, 3, 4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
});
