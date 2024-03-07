const express = require('express');
const app = express();

const cors = require('cors');
const port = 5000;

const UserRouter = require("./routers/userRouter")
const ProductRouter = require("./routers/productRouter")
const UtilRouter = require("./routers/util")



app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use("/user", UserRouter);
app.use("/product", ProductRouter);
app.use("/util", UtilRouter);

app.use(express.static('./static/uploads'));



app.listen(port, () => {
    console.log("Server Started");
})

