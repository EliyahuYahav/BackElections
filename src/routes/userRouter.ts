import express, { Router } from "express";
import { login, register, GetAllUsers } from "../controllers/authController";


const router: Router = express.Router();

router.route('/register').post(register);

router.route("/login").post(login);

router.route("/users").get(GetAllUsers);

export default router;