import { validationResult } from "express-validator";
import { User } from "../../sequelize/database.js";

export default function createUser(req, res) {
  const result = validationResult(req);
  const { firstName, lastName, email, username, password } = req.body;
  console.log(req.body);
  try {
    if (!result.isEmpty()) {
      return res.json(result.array().map((err) => err.msg));
    }
    User.findOne({
      where: {
        email: email,
      },
    }).then((user) => {
      if (user) {
        return res.json("El usuario ya existe, por favor inicia sesion");
      } else
        User.create({
          firstName,
          lastName,
          email,
          username,
          password,
        }).then((createuser) => {
          if (createuser)
            return res.json(
              `Bienvenido ${username}, te has registrado con exito.`
            );
          else
            return res.json(
              "Se ha producido un error al registrarte, por favor intenta nuevamente."
            );
        });
    });
  } catch (error) {
    if (error) return res.json(error);
  }
}
