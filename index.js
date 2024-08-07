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
router.get("./", (req, res) => {

res.status(200).sendFile(path.resolve("./static/html/index.html"))


})
router.get("/users", (req, res) => {


    const userQuery = `
    select * from Users;
    
    
    `
  db.query(userQuery, (err, queryResults) => {
    if (err) throw new Error ("Users not found. Contact Site Director if problem persists ")
        res.json({ 
       status:res.statusCode,
       queryResults



        })
    



  })





    
    })
    router.get("/users/:id", (req, res) => {
try {

        const userQuery = `
        select * from Users
        where userID = ${req.params.id};
        
        `
      db.query(userQuery, (err, queryResults) => {
        if (err) throw new Error ("Users not found. Contact Site Director if problem persists ")
            res.json({ 
           status:res.statusCode,
           queryResults
    
    
    
            })
        
    
    
    
      })
}catch(e) {

    res.json({

        status:404,
        ErrorMsg: e.message

    })

}
    
    
    
    
        
        })
        router.post("/register", (req, res) => {
            
            try {
                    const userQuery = `
                    insert into Users
                    (default, "Edelgard", "Von-Hresvelg", 23, "CrimsonEagles@gmail.com", "IWantedToWalkWithYou");
                    
                    `
                  db.query(userQuery, (err, queryResults) => {
                    if (err) throw new Error ("Could not add user. Contact Site Director if problem persists ")
                        res.json({ 
                       status:res.statusCode,
                       queryResults
                
                
                
                        })
                    
               
                
                
                  })
            }catch(e) {
            
                res.json({
            
                    status:404,
                    ErrorMsg: e.message
            
                })
            
            }
                
                
                
                
                    
                    })
app.listen(port, () => {

    console.log(`port runs at ${port}`)




})
