
const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        enum:["Buyer","Seller"],
        default:"Buyer"
    }
})

const user=mongoose.model("User",Schema);

model:exports=User