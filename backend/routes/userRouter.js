import express from "express";
import {
  foodController,
  forgetPassController,
  googleLoginController,
  loginPostController,
  logoutController,
  resetPassController,
  signupGetController,
  signupPostController,
} from "../controllers/userController.js";

import { loginValidator, signupValidator } from "../validators/condition.js";
import { runValidation } from "../validators/validation.js";

const userRouter = express.Router();

//all routes are here
userRouter.get("/signup", signupGetController);
userRouter.post(
  "/signup",
  signupValidator,
  runValidation,
  signupPostController
);
userRouter.post("/login", loginValidator, runValidation, loginPostController);
userRouter.post("/logout", logoutController);
userRouter.get("/food", foodController);
userRouter.post("/google-login", googleLoginController);
userRouter.post("/forget-password", forgetPassController);
userRouter.post("/reset-password", resetPassController);

export { userRouter };
