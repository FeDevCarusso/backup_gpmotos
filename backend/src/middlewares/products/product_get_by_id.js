import { Product } from "../../sequelize/database.js";

export default async function getProductById(req, res) {
  const { id, code } = req.params;
  try {
    Product.findOne({
      where: {
        id: id,
      },
    }).then((product) => {
      console.log(product);
      if (product) return res.json(product);
      else return res.json("El producto no existe.");
    });
  } catch (error) {
    res.json(error);
  }
}
