require('dotenv').config();
const app = require("./src/app");
const connectDb= require("./src/db/db")


connectDb()

const PORT=process.env.PORT
// app.listen(PORT,()=>{
//     console.log("server started");
    
// })
app.use((req,res,next)=>{
    next ()
})

module.exports=app