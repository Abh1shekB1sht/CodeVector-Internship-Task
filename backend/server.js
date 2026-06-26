const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const express = require("express");
const cors = require("cors");
const productRoute = require("./routes/productRoute.js");

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

connectDB().catch((error) => {
  console.error("Database connection failed:", error);
});

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.use("/api/product", productRoute);

const handler = (req, res) => app(req, res);

if (require.main === module) {
  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export a serverless-compatible handler for Vercel and keep the Express
// `app` available as a property for local testing/imports.
module.exports = handler;
module.exports.app = app;
