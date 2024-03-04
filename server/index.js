const express = require('express');
const app = express();

const cors = require('cors');
const port = 5000;

const UserRouter = require("./routers/userRouter")
const ProductRouter = require("./routers/productRouter")



app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use("/user", UserRouter);
app.use("/product", ProductRouter);



app.listen(port, () => {
    console.log("Server Started");
})

