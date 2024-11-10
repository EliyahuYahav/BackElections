import express, { Application } from "express";
import userRouter from './routes/userRouter.js'
// import actionRoute from './routes/actionRoute.js'
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import cp from "cookie-parser";
// import { authMiddleware } from "./middleware/authMiddleware.js";
import swaggerUi from 'swagger-ui-express'
// import {swaggerSpec} from './swagger.js'

dotenv.config();

const PORT : string|number = process.env.PORT || 3000;
const app: Application = express();

connectDb();

app.use(express.json());
app.use(cp());

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', userRouter)
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

