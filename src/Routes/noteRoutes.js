let express=require("express");
let auth=require("../middlewares/auth")
const { getNote, createNote, deleteNote, updateNote } = require("../controllers/noteController");
const noteRouter=express.Router();
noteRouter.get("/",auth,getNote);
noteRouter.post("/",auth,createNote);
noteRouter.delete("/:id",auth,deleteNote);
//noteRouter.update("/:id",auth,updateNote);
module.exports=noteRouter;