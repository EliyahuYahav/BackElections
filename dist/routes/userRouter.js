"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
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
exports.default = router;
