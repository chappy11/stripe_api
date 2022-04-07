var express = require('express');
const app = express();
var router = express.Router();
app.use(express.json());
const  cors = require("cors");
const stripe = require("stripe")('sk_test_51IlXo6G5BhKeRDfTmCYLpZjnDUjIECIgBZUlFNzYGQqXepWsBCxj6lVHrBWAm4iYNUbvABO7jEpcgf8VEsGp6K0G00X9HlI94e')


router.post("/",async(req,res)=>{
  const {amount,id,idno} = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount:amount,
            payment_method:id,
            confirm:true,
            currency:'PHP',
            customer:idno
        })
        
        res.json({message:"Successfully Paid",success:true,payment:payment.id});
    } catch (error) {
        res.json({message:error,success:false});
    }
})


module.exports=router;