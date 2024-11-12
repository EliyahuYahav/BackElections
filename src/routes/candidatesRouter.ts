import express, { Router } from "express";
import { GetAllCandidates} from "../controllers/authController";
import { removeVote, updateVote } from "../controllers/cndidatesControllers";


const router: Router = express.Router();

router.route("/candidates").get(GetAllCandidates);

router.route("/add/candidates/:id/:candidates").put(updateVote);

router.route("/remove/candidates/:id/:candidates").put(removeVote);

export default router;