import express from "express";
const router = express.Router();

router.get("/getOrder",(req,res)=>{
    res.send("getOrder");
})

router.post("/createOrder",(req,res)=>{
    res.send("createOrder");
})

router.put("/updateOrder",(req,res)=>{
    res.send("updateOrder");
})

router.delete("/deleteOrder",(req,res)=>{
    res.send("deleteOrder");
})

export default router;