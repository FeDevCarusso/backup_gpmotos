import Router from "express";
import createUser from "../middlewares/users/login_register.js";
import { body } from "express-validator";

const register = Router();
register.post(
  "/",
  [
    body("firstName", "Ingrese su nombre.").isLength(1).isString(),
    body("lastName", "Ingrese su apellido").isLength(1).isString(),
    body(
      "email",
      "Ingrese una direccion de correo electronico válida"
    ).isEmail(),
    body("password", "Ingrese una contraseña segura.)").isLength({min: 8}).isString()
    .isLength({ min: 8 })
    .not()
    .isLowercase()
    .not()
    .isUppercase()
    .not()
    .isNumeric()
    .not()
    .isAlpha(),
    body("username", "Ingrese un nombre de usuario").isLength(1).isString(),
  ],
  createUser
);

export default register;
