import { Request, Response } from "express";
import dotenv from "dotenv";
import { AllCandidates, removeVoteUserAndCandidates, UpdateVoteUserAndCandidates } from "../services/userService";

dotenv.config();

const JWT_SECRET: string = process.env.JWT_SECRET || "default_secret";

export const GetAllCandidates = async ( req: Request, res: Response): Promise<void> => {
  try {
    const allCandidate = await AllCandidates();
    res.status(200).json(allCandidate);
  } catch (error) {
    res.status(400).json({ message: "you have a problem to get all users" });
  }
};

export const updateVote = async ( req: Request, res: Response): Promise<void> => {
    try {
        const user = await UpdateVoteUserAndCandidates(req.params.id, req.params.candidates)
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: "you have a problem to update your Vote" });
    }
};

export const removeVote = async ( req: Request, res: Response): Promise<void> => {
    try {
        const user = await removeVoteUserAndCandidates(req.params.id, req.params.candidates)
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: "you have a problem to update your Vote" });
    }
};
