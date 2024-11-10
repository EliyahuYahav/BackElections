"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_js_1 = __importDefault(require("./routes/userRouter.js"));
// import actionRoute from './routes/actionRoute.js'
const db_js_1 = __importDefault(require("./config/db.js"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import {swaggerSpec} from './swagger.js'
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
(0, db_js_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', userRouter_js_1.default);
// app.use('/users', authMiddleware, actionRoute)
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
