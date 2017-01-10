var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () =>{
    var message = generateMessage('Rishi', 'Yo what up?');
    expect(message.from).toBe('Rishi');
    expect(message.text).toBe('Yo what up?');
    expect(message.createdAt).toBeA('number');
  });
});
