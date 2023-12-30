import express from "express";
import authController from "../../controllers/auth-controller.js";
import { isEmplyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { userRegisterSchema } from "../../models/User.js";

const authRouter = express.Router();

authRouter.post("/register", isEmplyBody, validateBody(userRegisterSchema), authController.register);

export default authRouter;
