import express from 'express';
const app = express();
import orderRouter from "./routes/order.js";
import productDynamicRouter from "./routes/product_dynamic_route.js";

app.get("/",(req,res)=>{
   // res.send("Hi");  // -> default - 200 and text 'Hi'
   //  res.status(500).send("Error");   -> status - 500 and text 'Error'
   // res.json({"Key" : "Value"});   -> status - 200 and json

//    javascript objects are automatiocally send as JSON
   let object = { 
    "key1": "Value1",
    "key2": "Value2",
   }
   res.send(object);


})

app.get("/getUser",(req,res)=>{
    res.send("getUser");
})

app.post("/createUser",(req,res)=>{
    res.send("createUser");
})

app.put("/updateUser",(req,res)=>{
    res.send("updateUser");
})

app.delete("/deleteUser",(req,res)=>{
    res.send("deleteUser");
})

app.use("/order",orderRouter);
app.use("/product",productDynamicRouter);

app.use(NoEndpointMatching);

function NoEndpointMatching(req,res) {
    res.status(404).send("Provide valid endpoint");
}
app.listen(4747);