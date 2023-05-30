import { Router } from "express";
import productPost from "../middlewares/products/product_post.js";
import productsGet from "../middlewares/products/products_get.js";
import productDelete from "../middlewares/products/products_delete.js";
import getProductById from "../middlewares/products/product_get_by_id.js";
import multer from "multer";
import { User } from "../sequelize/database.js";
import { body } from "express-validator";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/storage");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.substring(
      file.originalname.lastIndexOf("."),
      file.originalname.length
    );
    cb(null, Date.now() + file.originalname + ext);
  },
});

const upload = multer({ storage: storage });
const products = Router();

products.get("/:id", getProductById);

products.get("/", productsGet);

products.post(
  "/",
  upload.single("productImage"),

  function (req, res, next) {
    try {
      if (req.isAuthenticated()) {
        User.findOne({ where: { id: req.user } }).then((user) => {
          if (!user) return res.json("No existe el usuario.");
          if (user) {
            return user.role === "admin"
              ? next()
              : res.json("Not authorized, not privileges");
          }
        });
      } else return res.json("Not authorized");
    } catch (err) {
      return res.json("err");
    }
  },
  [
    body("productBrand", "Ingrese una marca").isLength(1),
    body("productName", "Ingrese una marca").isLength(1),
    body("model", "Ingrese un modelo").isLength(1),
    body("price", "Ingrese valor").isLength(1).isNumeric(),
    body("code", "Ingrese codigo").isLength(1).isNumeric(),
  ],
  productPost
);

products.delete("/:id", productDelete);

export default products;
