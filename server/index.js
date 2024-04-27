const express = require('express');
const app = express();
const port = 5000;



const UserRouter = require("./routers/userRouter")
const AdminRouter = require("./routers/adminRouter")
const ProductRouter = require("./routers/productRouter")
const FeedbackRouter = require("./routers/feedbackRouter")
const UtilRouter = require("./routers/util")
const OrderRouter = require("./routers/orderRouter")

const stripe = require("stripe")("sk_test_51N5i2kSE8ALNlcfUeImWOPJjucvuwXy38yixqmADR9BCflGnwkfVUDy2T58YI8FxXSbADNBNK5bkBI4ZSlxSyRNU00guAF4MyK")

const cors = require('cors');


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use("/user", UserRouter);
app.use("/admin", AdminRouter);
app.use("/product", ProductRouter);
app.use("/feedback", FeedbackRouter);
app.use("/order", OrderRouter);
app.use("/util", UtilRouter);

app.use(express.static('./static/uploads'));

app.get('/get-permission', (req, res) => {
    const token = req.header('x-auth-token');
    console.log(token);
    if(token === 'admin'){
        res.json({allowed: true});
    }else{
        res.json({allowed: false});
    }
})

app.post('/create-payment-intent', async (req, res) => {
    const { amount, customerData } = req.body;
    // const { name, address } = customerData;
    console.log(amount);
    const customer = await stripe.customers.create(customerData);
    console.log(customer.id);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'inr',
      description: 'Payment Description',
      customer : customer.id
    });
    res.json({
      clientSecret: paymentIntent.client_secret
    });
  });
  
  app.post('/retrieve-payment-intent', async (req, res) => {
    const { paymentIntentId } = req.body;
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    res.json(paymentIntent);
  });

app.listen(port, () => {
    console.log("Server Started");
})

