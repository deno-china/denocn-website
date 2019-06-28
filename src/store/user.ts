import { observable, action } from 'mobx';
import { UserModel } from '../models/user';
import { httpGet } from '../common/request';

class Store {
  @observable
    info: UserModel = {};

  @action
  async loadInfo() {
      const user = await httpGet<UserModel>('/api/user/me');
      this.info = user;
  }
}

const userStore = new Store();
export default userStore;

userStore.loadInfo();
