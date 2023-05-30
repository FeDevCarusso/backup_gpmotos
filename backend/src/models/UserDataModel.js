import { DataTypes } from "sequelize";
export default function userDataModel(sequelize) {
  const UserDataModel = sequelize.define("UserData", {
    cart: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
  });
  return userDataModel;
}
