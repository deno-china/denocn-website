import { action, observable } from 'mobx';

class Store {
  @observable
  content: string = '';

  @action
  setContent(value: string) {
    this.content = value;
  }
}

const replyStore = new Store();
export default replyStore;
