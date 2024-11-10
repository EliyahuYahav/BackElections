import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET: string = process.env.JWT_SECRET || "default_secret";

export const register = async (req: Request, res: Response): Promise<void> => {}

export const login = async (req: Request, res: Response): Promise<void> => {}