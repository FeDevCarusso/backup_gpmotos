import { Router, application } from "express";
import products from "./products.js";
import login from "./login.js";
import checklogin from "./checklogin.js";
import logout from "./logout.js";
import { storagePath } from "../app.js";
import register from "./register.js";
import { User, UserData } from "../sequelize/database.js";
import { getImagesMiddleware } from "../middlewares/getImages/getImages_index.cjs";
const router = Router();

//products

router.use("/products", products);

//autuh

router.use("/login", login);
router.use("/register", register);

//check_auth
router.use("/checkauth", checklogin);

//logout
router.use("/logout", logout);

//fetch images

router.get("/images/:image", function (req, res) {
  const { image } = req.params;
  // console.log(image);

 
  getImagesMiddleware(image, res)
});

//gettest
router.get("/allusers", async function (req, res) {
  res.json(await User.findAll());
});
export default router;
