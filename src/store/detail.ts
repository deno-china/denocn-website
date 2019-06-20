import { action, observable } from "mobx";
import moment from "moment";
import { httpGet } from "../common/request";
import { TopicModel } from "../models/topic";
import { UserModel } from "../models/user";

export interface TopicDetail extends TopicModel {
  author?: UserModel;
}

class Store {
  @observable
  topic: TopicDetail = {};

  @action
  async load(id: string) {
    const topic: TopicDetail = await httpGet(`/api/topic/detail/${id}`, {});
    topic.created_at = moment(topic.created_at).fromNow();
    this.topic = topic;
  }
}

const detailStore = new Store();
export default detailStore;
