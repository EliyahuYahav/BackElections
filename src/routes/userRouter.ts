import express, { Application, Router } from "express";
import { GetAllCandidates, login, register, GetAllUsers } from "../controllers/authController";


const router: Router = express.Router();

router.route('/register').post(register);

router.route("/login").post(login);

router.route("/candidates").get(GetAllCandidates);

router.route("/users").get(GetAllUsers);

export default router;