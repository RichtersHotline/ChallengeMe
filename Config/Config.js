import { createPool } from "mysql2";
import "dotenv/config";
let connection = createPool({

host: process.env.hostDB,
user: process.env.UserDB,
password: process.env.PWD,
database: process.env.dbName,
multipleStatements: true,
connectionLimit:20






})
connection.on("Connection", (pool) => {

if(!pool) throw new error ("Connection could not be established. Contact your Site Adminstrator if this problem persists")


})
export {

connection


}