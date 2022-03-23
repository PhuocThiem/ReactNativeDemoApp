import http from '../services/http';

export default class User {
  static async getListOfUser() {
    const res = await http.get('users/all');
    return res;
  }

  static async createUser(body, config) {
    const res = await http.post('/users', body, config);
    return res;
  }

  static async updateUser(data, config) {
    const res = await http.put(`users/${data.id}`, {name: data.name}, config);
    return res;
  }

  static async deleteUser({userID}, config) {
    const res = await http.delete(`users/${userID}`, null, config);
    return res;
  }
}
