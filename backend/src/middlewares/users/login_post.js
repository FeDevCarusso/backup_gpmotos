import { io } from "../../app.js";

export default function login_post(req, res) {
  if (req.isAuthenticated()) {
    io.emit("logged_in");

    return res.json("done");
  } else {
    res.json("no");
  }
}
