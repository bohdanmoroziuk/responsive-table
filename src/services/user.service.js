const uri = Symbol('UserService.Uri');

const UserService = {
  [uri]: 'https://jsonplaceholder.typicode.com/users',

  getAll() {
    return fetch(this[uri]);
  }
};

export default UserService;