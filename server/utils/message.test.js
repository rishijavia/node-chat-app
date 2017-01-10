var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () =>{
    var message = generateMessage('Rishi', 'Yo what up?');
    expect(message.from).toBe('Rishi');
    expect(message.text).toBe('Yo what up?');
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var message = generateLocationMessage('Rishi', 123, 321);
    expect(message.from).toBe('Rishi');
    expect(message.url).toBe('https://www.google.com/maps?q=123,321')
    expect(message.createdAt).toBeA('number');
  });
});
