import express, { Application, Router } from "express";
import { login, register } from "../controllers/authController";

const app: Application = express();
const router: Router = express.Router();

/**
 * @swagger
 * /login:
 *  post:
 *      summary: login user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          fullName:
 *                              type: string
 *                          password:
 *                              type: number
 *      responses:
 *          201:
 *              description: you login
 */
router.route("/login").post();

/**
 * @swagger
 * /register:
 *  post:
 *      summary: create new user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          fullName:
 *                              type: string
 *                          passportId:
 *                              type: string
 *                          password:
 *                              type: number
 *                          role:
 *                              type: string
 *      responses:
 *          201:
 *              description: new user is added
 */
router.route("/register").post();


export default router;