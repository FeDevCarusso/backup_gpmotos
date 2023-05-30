import { validationResult } from "express-validator";
import { Product } from "../../sequelize/database.js";
import { io } from "../../app.js";
export default async function productDelete(req, res) {
  const { id } = req.params;
  const result = validationResult(req);
  try {
    const deleteItem = await Product.findOne({
      where: {
        id: id,
      },
    });
    if (deleteItem) {
      deleteItem.destroy().then(function (done) {
        if (done) {
          io.emit("deleteItem");
          return res.json(
            `Se ha eliminado correctamente (${deleteItem.productName} ${deleteItem.productBrand} ${deleteItem.model})`
          );
        } else {
          return res.json("Se ha producido un error, reintente.");
        }
      });
    } else {
      res.json("No se ha encontrado el producto");
    }
  } catch (error) {
    res.json(error);
  }
}
