const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db.js");
const express = require("express");
const cors = require("cors");
const productRoute = require("./routes/productRoute.js");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://code-vector-internship-task-1kz5.vercel.app",
  }),
);

connectDB().catch((error) => {
  console.error("Database connection failed:", error);
});

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.use("/api/product", productRoute);

if (require.main === module) {
  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
