import { Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema:Schema = new mongoose.Schema({
  username: { type: String, required: [true, "please add the username"], unique: [true, "username already exists"], trim: true } as object,
  password: { type: String, required: [true, "please add the password name"], trim: true} as object,
  isAdmin : { type: Boolean } as object,
  hasVoted : { type: Boolean } as object,
  votedFor: { type: String}
});

export interface User {
  username: string;
  password: string;
  isAdmin: Boolean;
  hasVoted?: Boolean;
  votedFor: string;
  _id?: string;
}

export default mongoose.model("User", UserSchema);