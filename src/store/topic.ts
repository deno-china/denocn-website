import { action, observable } from 'mobx';
import moment from 'moment';
import { httpGet } from '../common/request';
import { TopicModel } from '../models/topic';

export interface TopicListItem extends TopicModel {
  user_nick_name: string;
  user_avatar: string;
  reply_user_name?: string;
  reply_user_id?: number;
  reply_user_avatar?: string;
}

class Store {
  @observable
  list: TopicListItem[] = [];

  @observable
  page: number = 1;

  @observable
  total: number = 0;

  @observable
  pageSize: number = 15;

  @observable
  type: string = 'all';

  @action
  async load() {
    const { total, list } = await httpGet(`/api/topic/${this.type}`, {
      page: this.page,
      size: this.pageSize,
    });
    this.total = total;
    this.list = list.map((item: TopicListItem) => ({
      ...item,
      last_reply_time: moment(item.last_reply_time).fromNow(),
      created_at: moment(item.created_at).fromNow(),
    }));
  }

  @action
  async changeType(type: 'job' | 'all' | 'good' | 'cold' | 'new') {
    this.type = type;
    this.page = 1;
    await this.load();
  }
}

const topicStore = new Store();
export default topicStore;
