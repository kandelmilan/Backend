const express = require("express")
const app = express()
const userRouter = require("./router/user.router")

app.use(express.json())
app.get("/", (req, res) => {
    res.status(200).send("Server is Serving")
})



app.use("/api/v1", userRouter)




module.exports = app