import { Product } from "../../sequelize/database.js";
import { io } from "../../app.js";
import { validationResult } from "express-validator";
export default async function productPost(req, res) {
  const { code, productBrand, productName, model, price, productImage } =
    req.body;
  const result = validationResult(req);

  if (!result.isEmpty()) return res.json(result.array().map((err) => err.msg));
  try {
    let data = !req.file
      ? {
          code,
          productBrand,
          productName,
          model,
          price,
        }
      : {
          code,
          productBrand,
          productName,
          model,
          price,
          productImage: req.file.filename,
        };

    const createdProduct = await Product.create(data);
    return createdProduct
      ? () => {
          io.emit("addproduct");
          res.json(
            `Se ha añadido correctamente ${productName} ${model} (${productBrand})`
          );
        }
      : res.json("Se ha producido un error al integrar el producto.");
  } catch (error) {
    res.json(error);
  }
}
