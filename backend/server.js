const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const express = require("express");
const cors = require("cors");
const productRoute = require("./routes/productRoute.js");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/product", productRoute);

dotenv.config();
connectDB().catch((error) => {
  console.error("Database connection failed:", error);
});

if (require.main === module) {
  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
