const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const app = require("./app.js");
const express = require("express");
const cors = require("cors");
const productRoute = require("./routes/productRoute.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/product", productRoute);

dotenv.config();
connectDB();

if (require.main === module) {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}

module.exports = app;
