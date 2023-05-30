import { Router } from "express";
import checkLogin from "../middlewares/checklogin/checklogin_get.js";
const checklogin = Router()

checklogin.get("/", checkLogin)

export default checklogin