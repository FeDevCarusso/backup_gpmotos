import { Product } from "../../sequelize/database.js";
import { io } from "../../app.js";
import { validationResult } from "express-validator";
export default async function productPost(req, res) {
  console.log(req.file.filename)
  const { code, productBrand, productName, model, price } =
    req.body;
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.json(result.array()) 
  } else {
    const createProduct =await Product.create({
      code, productBrand, productName, model, price,productImage: req.file.filename
    })

    if (createProduct) {
      return res.json("El producto se ha creado con exito")
    } else return res.json("Se ha producido un error")

  }
  try {
    let data = !req.file
     
  } catch (error) {
    res.json(error);
  }
}
