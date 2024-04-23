const express = require('express');
const app = express();


const port = 5000;

// const stripe = require("stripe")('sk_test_51N5i2kSE8ALNlcfUeImWOPJjucvuwXy38yixqmADR9BCflGnwkfVUDy2T58YI8FxXSbADNBNK5bkBI4ZSlxSyRNU00guAF4MyK');

const UserRouter = require("./routers/userRouter")
const AdminRouter = require("./routers/adminRouter")
const ProductRouter = require("./routers/productRouter")
const UtilRouter = require("./routers/util")


const cors = require('cors');


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use("/user", UserRouter);
app.use("/admin", AdminRouter);
app.use("/product", ProductRouter);
app.use("/util", UtilRouter);

app.use(express.static('./static/uploads'));

//for payment

// app.post("/api/create-checkout-session", async(req,res) => {
//     const {products} = req.body;
//     console.log(products)

//     const lineItems = products.map((product) =>( {
//         price_data: {
//             currency: 'INR',
//             product_data: {
//                 name: product.name,
//                 // images: [product.image],
//             },
//             unit_amount: product.price * 100
//         },
//         quantity: 1
//     }))

//     console.log(JSON.stringify(lineItems));

//     const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         line_items: lineItems,
//         mode: "payment",
//         success_url: 'http://localhost:5173/thankyou',
//         cancel_url: 'http://localhost:5173/browse',
//     })
//     res.json({id: session.id})
// })

//for paymet



app.listen(port, () => {
    console.log("Server Started");
})

