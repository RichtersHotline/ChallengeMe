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
                    values(default, "Edelgard", "Hresvelg", "25", "Crimson@gmail.com", "El");
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
                    router.patch("/users/:id", (req, res) => {
            
                        try {
                                const userQuery = `
                              update Users
                              set userName = "Richard", userSurname = "Rooste", userAge = "30", userEmail = "Nuclear", userPWD = "Rooster"
                              where userEmail = "Cointoss@gmail.com2";
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
                                router.delete("/users/:id", (req, res) => {
            
                                    try {
                                            const userQuery = `
                                            delete from Users 
                                            where userName = "Edelgard";
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
                                        
                                        
                                          router.delete("/users/:id", (req, res) => {
            
                                    try {
                                            const userQuery = `
                                            delete from Users 
                                            where userName = "Edelgard";
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
                                        
                                            
                                            })
                                            router.get("/products", (req, res) => {
            
                                                try {
                                                        const userQuery = `
                                                        select * from Products
                                                        ;
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
                                                        router.get("/products/:id", (req, res) => {
            
                                                            try {
                                                                    const userQuery = `
                                                                    select * from Products 
                                                                    where prodID = ${req.params.id};
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
                                                                    router.post("/addProduct", (req, res) => {
            
                                                                        try {
                                                                                const userQuery = `
                                                                                insert into Products
                                                                                values(default, "Holster", 5, 500, "youtube.com", 3);
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
                                                                                router.patch("/products/:id", (req, res) => {
            
                                                                                    try {
                                                                                            const userQuery = `
                                                                                          update Products
                                                                                          set prodName = "Lance", prodQuality = 5, prodPrice = 3000, prodUrl = "youtube.com", userID = 4
                                                                                          where prodID = 3;
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

                                                                                            router.delete("/products/:id", (req, res) => {
            
                                                                                                try {
                                                                                                        const userQuery = `
                                                                                                        delete from Products 
                                                                                                        where prodID = 2;
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
