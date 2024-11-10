import express from "express";
import http from "http";
// import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

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

