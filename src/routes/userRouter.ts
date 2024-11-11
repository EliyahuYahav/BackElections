import express, { Application, Router } from "express";
import { GetAllCandidates, login, register } from "../controllers/authController";


const router: Router = express.Router();

router.route('/register').post(register);

router.route("/login").post(login);

router.route("/candidates").get(GetAllCandidates);

export default router;