import "dotenv/confg"
import jwt from "jsonwebtoken"
const {sign, verify} = jwt 

function createToken(user) {

return sign(
{

emailAdd: user.emailAdd,
PWD: user.PWD
},
process.env.SECRET_KEY,
{

    expiresIn: "3h"

})

}
export {

createToken

}