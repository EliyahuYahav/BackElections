"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
// import { Server } from "socket.io";
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server is running on port 3000");
});
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:4000",
//   },
// });
// io.on("connection", (socket) => {
//   console.log("User is Connected!!!");
//   socket.on("chat message", (data) => {
//     socket.broadcast.emit("chat message", data);
//   });
//   socket.on("typing", () => {
//     socket.broadcast.emit("typing", "typing...");
//   });
// });
// io.on("disconnect", () => {
//   console.log("User disconnected");
// });
