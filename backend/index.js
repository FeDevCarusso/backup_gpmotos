import app from "./src/app.js";
import httpServer from "./src/app.js";
import { User, sequelize } from "./src/sequelize/database.js";

sequelize
  .sync({
    force: false,
    alter: false
  })
  .then(async function (data) {
    if (data) {
      console.log("Database connection succefull... ");
      await User.findOne({
        where: {email: "gpmotos_alejo@hotmail.com"}
      }).then(async function(user) {
        if (!user) {
          await User.create({
            firstName: "Alexis",
            lastName: "Alejo",
            email: "gpmotos_alejo@hotmail.com",
            username: "Admin",
            password: "Aa12345",
            role:"admin"
          });
        }
      })
     
      return httpServer.listen(
        3001,
        console.log(`Server running [dev2.1] on http://localhost:3001`)
      );
    } else {
      return console.log("Cannot connect to Database, please try again.");
    }
  });
