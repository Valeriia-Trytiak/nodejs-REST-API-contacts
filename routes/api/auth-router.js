import express from "express";
import authController from "../../controllers/auth-controller.js";
import { isEmplyBody, userenticate, upload } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { userLoginSchema, userRegisterSchema, updateSubscriptionSchema } from "../../models/User.js";

const authRouter = express.Router();

authRouter.post("/register", isEmplyBody("missing fields"), validateBody(userRegisterSchema), authController.register);
authRouter.post("/login", isEmplyBody("missing fields"), validateBody(userLoginSchema), authController.login);
authRouter.get("/current", userenticate, authController.getCurrent);
authRouter.post("/logout", userenticate, authController.logout);
authRouter.patch("/", userenticate, validateBody(updateSubscriptionSchema), authController.subscription);
authRouter.patch("/avatars", userenticate, upload.single("avatar"), authController.updateAvatar);
export default authRouter;
