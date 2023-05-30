import { Product } from "../../sequelize/database.js";

export default async function productsGet(req, res) {
    try {
      const data = await Product.findAll();
      res.json(
        data.length ? data : "Aun no has cargado elementos en la base de datos."
      );
    } catch (error) {
      res.json(error);
    }
  
}
