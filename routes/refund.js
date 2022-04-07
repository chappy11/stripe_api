var express = require('express');
const app = express();
var router = express.Router();
app.use(express.json());
const cors = require("cors");
 const stripe = require("stripe")('sk_test_51IlXo6G5BhKeRDfTmCYLpZjnDUjIECIgBZUlFNzYGQqXepWsBCxj6lVHrBWAm4iYNUbvABO7jEpcgf8VEsGp6K0G00X9HlI94e')


 router.post("/",async(req,res)=>{
     const {amount,trans_id} = req.body;
     try {
         const refund = await stripe.refunds.create({
             payment_intent:trans_id,
             amount:amount+"00",
         })
         res.json({message:"Successfully Refunded",success:true});
     }catch(error){
         res.json({message:error,success:false})
         console.log(error);
        }

    })

    module.exports=router;