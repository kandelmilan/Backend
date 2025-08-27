const express=require("express")
const app=express()
const userRoute=require("./router/user.router")
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("hello world")

})

app.use(userRoute)

module.exports=app
