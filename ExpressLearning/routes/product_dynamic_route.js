import express from "express";
const router = express.Router();

router.get("/getProduct/:id",(req,res)=>{
    console.log(req.originalUrl);
    res.status(200).json(
        {"id": req.params.id,
        "desc": "Product abc"},
        );
})

router.get("/searchProduct/:prizeStart/:prizeEnd",(req,res)=>{
    res.json({"message" : "prizeStart=" + req.params.prizeStart + " " + "prizeEnd=" + req.params.prizeEnd});
})

router.get("/searchProduct/:phoneNumber([0-9]{10})/",(req,res)=>{
    res.json({"message" : "phone " + req.params.phoneNumber});
})

// endpoint -> /product/searchProduct?rating=10
router.get("/searchProduct",(req,res)=>{
    res.json({"Product rating " : req.query.rating});
})

// router.get("*",(req,res)=>{
//     res.status(404).send("URL Not found")
// })

export default router;