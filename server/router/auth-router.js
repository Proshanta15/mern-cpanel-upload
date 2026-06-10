import express from "express";
import { homePage, loginPage, registrationPage, user } from "../controllers/auth-controller.js";
import { validate } from "../middlewares/validate-middleware.js";
import {authMiddleware} from "../middlewares/authmiddleware.js";
import { loginSchema, signupSchema } from "../validators/auth-validator.js";

const router = express.Router();

router.route("/").get(homePage);
router.route("/register").post(validate(signupSchema), registrationPage);
router.route("/login").post(validate(loginSchema), loginPage);
router.route("/user").get(authMiddleware, user);

export default router;