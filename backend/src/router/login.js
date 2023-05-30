import { Router } from "express";
import login_post from "../middlewares/users/login_post.js";
import passport from "passport";

const login = Router();

login.post(
  "/",
  passport.authenticate("local", {
    successMessage: true,
    failureMessage: true,
  }),
  login_post
);
export default login;
