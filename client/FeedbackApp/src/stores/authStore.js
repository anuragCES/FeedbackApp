import { observable, action } from 'mobx';

class AuthStore {
  @observable username = '';
  @observable password = '';
  @action setUsername = (username) => {
    this.username = username;
  }
  @action setPassword = (password) => {
    this.password = password
  }
}

const authStore = new AuthStore();

export default authStore
