// 
import express from "express"
import path from "path"
import {connection as db} from "./Config/Config.js"
//express app created
const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000
// This is where the middleware goes
app.use(router,
    express.static("./static"),
    express.json(),
    express.urlencoded({

        extended:true


    }))
    // Heres where the endpoints will go :D

