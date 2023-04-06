const express = require("express");
const app=express();
const noteRouter = require("./Routes/noteRoutes");
const userRouter = require("./Routes/userRoutes");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors");
app.use(cors());
dotenv.config();
const PORT=process.env.PORT||5000
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
        app.listen(PORT,()=>{
        console.log("hello world port no 5000 started");
    });
})
.catch((error)=>{
    console.log("error hai kya");
});
app.use(express.json());
app.use("/users",userRouter);
app.use("/note",noteRouter);
app.get("/",(req,res)=>{
    res.send("hello from home");
});
app.get("/quote",(req,res)=>{
    res.send("hello from quote");
});

