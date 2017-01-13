const expect = require('expect');
const {Users} = require('./users');


describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node is awesome'
    },
    {
      id: '2',
      name: 'Jen',
      room: 'SocketIO is awesome'
    },
    {
      id: '3',
      name: 'Julie',
      room: 'Node is awesome'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      name: 'Rishi',
      id: '123',
      room: 'Moon'
    }
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
    expect(resUser).toEqual(user);
  });

  it('should return names for node is awesome', () => {
    var userList = users.getUserList('Node is awesome');
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for socket is awesome', () => {
    var userList = users.getUserList('SocketIO is awesome');
    expect(userList).toEqual(['Jen']);
  });

  it('should find a user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find a user', () => {
    var userId = '44';
    var user = users.getUser(userId);
    expect(user).toBe(undefined);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '99';
    var user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

});
