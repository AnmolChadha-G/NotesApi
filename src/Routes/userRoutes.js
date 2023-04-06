let express=require("express");
const { signup, signin } = require("../controllers/userController");
const userRouter=express.Router();
userRouter.post("/signin",signin);
userRouter.post("/signup",signup);
module.exports=userRouter;