"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: { type: String, required: [true, "please add the username"], unique: [true, "username already exists"], trim: true },
    password: { type: String, required: [true, "please add the password name"], trim: true },
    isAdmin: { type: Boolean },
    hasVoted: { type: Boolean },
    votedFor: { type: String }
});
exports.default = mongoose_1.default.model("User", UserSchema);
