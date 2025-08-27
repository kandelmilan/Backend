const express=require("express")

const router=express.Router()

router.get("/user",(req,res)=>{
    res.status(200).send("all user");

})
module.exports=router
router.post("/login",(req,res)=>{
    res.status(200).send("this is a user login")
})
