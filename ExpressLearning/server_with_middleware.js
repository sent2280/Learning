import express from 'express';
const app = express();
import productDynamicRouter from "./routes/product_dynamic_route.js";

const logger = (req,res,next)=>{
    console.log(`${new Date().toISOString()} : ${req.originalUrl}`);
    next();
}

const customizeRequest = (req,res,next)=>{
   req.defaultRating = 5;
   next();
};

//global middleware
app.use(logger)

app.use("/product",productDynamicRouter);

//route specific middleware

app.use("/rating",customizeRequest,(req,res)=>{
    res.send(String(req.defaultRating));
});

app.use("/extractRating",customizeRequest,(req,res)=>{
    res.send("extractRating " + req.defaultRating);
});

app.listen(4747);