import { DataTypes } from "sequelize";

export default function productModel(sequelize) {
  const ProductModel = sequelize.define(
    "Product",
    {
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      productBrand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      productImage: {
        type: DataTypes.STRING,
        defaultValue: "null",
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: "default",
        validate: {
          isIn: [
            [
              "default",
              "faroles",
              "tableros",
              "repuestos",
              "accesorios",
              "cascos",
              "cubiertas",
              "lubricantes",
              "baterias",
              "frenos",
              "suspension",
              "kits",
            ],
          ],
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return productModel;
}

/*
    agregar:
    Modelo
*/
