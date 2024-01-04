import express from "express";
import authController from "../../controllers/auth-controller.js";
import { isEmplyBody, userenticate } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { userLoginSchema, userRegisterSchema } from "../../models/User.js";

const authRouter = express.Router();

authRouter.post("/register", isEmplyBody("missing fields"), validateBody(userRegisterSchema), authController.register);
authRouter.post("/login", isEmplyBody("missing fields"), validateBody(userLoginSchema), authController.login);
authRouter.post("/logout", userenticate);
export default authRouter;
