import { ObjectId } from "./base";
import Reply from "./reply";
import User from "./user";

export default interface Topic {
  _id: ObjectId;
  type: "分享" | "问答" | "招聘";
  title: string;

  author_id: ObjectId;
  author?: User;

  content: string;
  is_top: boolean;
  is_good: boolean;
  is_lock: boolean;
  reply_count: number;
  view_count: number;
  collect_count: number;

  last_reply_id?: ObjectId;
  last_reply_time?: Date;
  last_reply?: Reply;

  tags?: string[];
  deleted: boolean;

  created_at?: string;
  updated_at?: string;
}
