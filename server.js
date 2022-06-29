const express=require("express")

const app=express()

const connectDB=require("./config/connectDB")
app.use(express.json())
const port=5000

//connect to DB
connectDB()
//routes
app.use("/api/contacts",require("./routes/contact"))

app.listen(port,(err)=>
err?console.log("erreur"):console.log(`server is running on port ${port}`))