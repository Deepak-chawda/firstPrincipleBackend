const express = require("express")
const app = express()
const port = 4000;
const cors = require("cors");
// connection file
require("./connection/connection")
// meddleware
app.use(cors());
app.use(express.json());
const TestimonialRoutes = require("./router/router")
app.use(TestimonialRoutes)

app.listen(port,()=>{
    console.log(`server active port on${port}`)
})