require('dotenv').config()
const mongoose  = require("mongoose")
const connectionfun=async()=>{
    try {
        await mongoose.connect(process.env.MONGODBURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
          console.log("connected successfully with data base")
    } catch (error) {
        console.log("error",error)
        console.log("not connected with data base")
    }
}
connectionfun()
