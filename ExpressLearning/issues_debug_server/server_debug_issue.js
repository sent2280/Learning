import express from 'express';
import stripePackage from 'stripe';
import raw from "raw-body";

const app = express();
const STRIPE_SECRET_KEY="sk_test_51OpmUjSCQVvdToCS8dDsT1QPHticGaIMWEomqvNMWYaug7QtN5SsPxebEfmg3ayiSDOYp2biEbNauoCmQAOd7wL400WF3iGboL";

const stripe = stripePackage(STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
});
const endpointSecret = "whsec_1218811ac8d1eadb6768f61b37eed5dd5baa8a93ba5191b6639722eb05db4be4";

const updateStripeStatus = async (req, res) => {
    console.log("Inside updateStripeStatus controller...");
   const sig = req.headers['stripe-signature'];
   let event;
   debugger;
   console.log("content-type = " + req.headers['content-type']);
  
   try{
       const rawBody = await raw(req);
       event = stripe.webhooks.constructEvent(rawBody,sig,endpointSecret); 
   }catch(err){
    console.log(`Webhook Error: ${err.message}`);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
   }
  
   switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      console.log("event = " + paymentIntentSucceeded);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  
  // Return a 200 response to acknowledge receipt of the event
  res.json({"message": "Payment details updated successfully"});
  
  };
  

// app.use(express.json());
app.use((req,res,next)=>{
    if(req.path==="/api/payment/stripe/statusUpdate"){
        next();
    }else{
        express.json()(req,res,next);
    }
});

app.post("/api/payment/stripe/statusUpdate",updateStripeStatus);

app.listen(4747);