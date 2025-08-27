const { default: mongoose } = require("mongoose");

const mongoose=require(mongoose)


mongoose.connect("mongodb://127.0.0.1:27017/E-commerce(Backend)").then(
    ()=>{
        console.log("db connection ok ")
    }
).catch()