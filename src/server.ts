import express, { Application } from "express";
import userRouter from './routes/userRouter'
import candidatesRouter from './routes/candidatesRouter'
import connectDb from "./config/db";
import dotenv from "dotenv";
import cp from "cookie-parser";
import cors from "cors"

dotenv.config();

const PORT : string|number = process.env.PORT || 3000;
const app: Application = express();

connectDb();

app.use(express.json());
app.use(cp());
app.use(cors())


app.use('/api', userRouter)
app.use('/api', candidatesRouter)

app.listen(PORT, ()=>{console.log(`server listen on port ${PORT}.`)})
