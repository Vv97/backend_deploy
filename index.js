const express = require("express");
const cors = require("cors");
const databaseConnect = require("./database/db");
const userRoutes = require("./Routes/user.Routes");
const productsRoutes = require("./Routes/products.routes");
const app = express();
app.use(cors());
app.use(express.json());

// user Routes
app.use("/user", userRoutes);
// cart Routes
app.use("/products", productsRoutes);

// connecting server with database
app.listen(process.env.port, () => {
    databaseConnect();
    console.log(`server is running at ${process.env.port} port`);
});