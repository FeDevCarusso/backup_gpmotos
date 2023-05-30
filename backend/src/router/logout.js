import {Router} from 'express'
import { io } from '../app.js'
const logout = Router()


logout.get("/", function(req,res, next) { 
    req.logOut(function(err) {
        if (err) return next(err)
        io.emit("logout")
        res.redirect("/checkauth")
    })
})

export default logout