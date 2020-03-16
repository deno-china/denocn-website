import { ObjectId } from "./base";
import User from "./user";

export default interface Reply {
  _id: ObjectId;

  author_id: ObjectId;
  author?: User;

  content: string;

  deleted: boolean;

  created_at?: string;
  updated_at?: string;
}
