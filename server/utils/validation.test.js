var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var message = isRealString(123);
    expect(message).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var message = isRealString('    ');
    expect(message).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var message = isRealString('  this is real string  ');
    expect(message).toBe(true);
  })
});
