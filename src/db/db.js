const mongoose=require('mongoose')
let isConnected=false

async function connectdb(){

    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected to db");
        isConnected=true
        
    })
    .catch((err)=>{
        console.error("error",err);
        
    })
}


module.exports =connectdb