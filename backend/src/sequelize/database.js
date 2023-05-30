import { Sequelize } from "sequelize";
import { config } from "dotenv";
import productModel from "../models/Products.js";
import userModel from "../models/Users.js";
import userDataModel from "../models/UserDataModel.js";
config();

const { DB_URL } = process.env;

export const sequelize = new Sequelize(DB_URL, {
  dialect: "postgres",
  logging: false,
//   dialectOptions: {
//     ssl: {
//       require: true,
//     },
//   },
});

productModel(sequelize);
userModel(sequelize);
userDataModel(sequelize);

const { Product, User, UserData } = sequelize.models;

User.belongsTo(UserData)

export { Product, User, UserData };
