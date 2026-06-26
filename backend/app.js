const express = require("express");
const cors = require("cors");
const productRoute = require("./routes/productRoute.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/product", productRoute);

module.exports = app;
