const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const route = require("./Route/userRoute");
app.use("/api/v1/User",route);
//DB Connect

mongoose.connect("mongodb://127.0.0.1:27017/UserRegistration").then(()=>{
    console.log("DB Connected");
    app.listen(5000,()=>{
        console.log("Server is listening to the port : 5000");
    })
}).catch((error)=>{
    console.log("Error");
})