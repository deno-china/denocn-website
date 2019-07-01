import { observable, action } from 'mobx';
import { UserModel } from '../models/user';
import { httpGet } from '../common/request';

class Store {
  @observable
  info: UserModel = {};

  @observable
  userInfo: UserModel = {};

  /**
   * 获取当前登陆用户信息
   * @author lingziyb
   */
  @action
  async loadInfo() {
    const user = await httpGet<UserModel>('/api/user/me');
    this.info = user;
  }

  /**
   * 获取用户信息
   * @author lingziyb
   * @param id 用户id
   */
  @action
  async loadUserInfo(id) {
    const user = await httpGet<UserModel>(`/api/user/info/${id}`);
    this.userInfo = user;
  }
}

const userStore = new Store();
export default userStore;

userStore.loadInfo();
