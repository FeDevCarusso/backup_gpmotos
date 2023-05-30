import express, { json, urlencoded } from "express";
import session from "express-session";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import { config } from "dotenv";
import morgan from "morgan";
import router from "./router/router.js";
import multer from "multer";
import passport from "passport";
import localStrategy from "passport-local";
import { User } from "./sequelize/database.js";
import cookieParser from "cookie-parser";
import { URL } from "url";
import bcrypt from "bcrypt";
//config
config({ path: "./.env" });

const imgUpload = multer({ dest: "./storage/productImg" });
const app = express();
const httpServer = createServer(app);
export const storagePath = new URL("./", import.meta.url).pathname + "storage";

export const io = new Server(httpServer, {
  cors: {
    origin: "http://192.168.1.49:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },
});
//middlewares
app.use(cookieParser());
app.use(
  cors({
    origin: "http://192.168.1.49:3000",
    credentials: true,
  })
);

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(
  session({
    secret: "dasndasndoasdpasdbañiufba13213",
    saveUninitialized: true,
    resave: true,
  })
);

app.use(morgan("dev"));
app.set("PORT", process.env.PORT || 3001);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(function (username, password, done) {
    User.findOne({ where: { username: username } }).then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) throw new Error(err);
          if (result) {
            return done(null, user);
          } else {
            return done(null);
          }
        });
      } else {
        return done(null, "El usuario no existe.");
      }
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  done(null, id);
});

//routes

app.use("/", router);

export default httpServer;
