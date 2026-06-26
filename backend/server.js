const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const app = require("./app.js");

dotenv.config();
connectDB();

if (require.main === module) {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}

module.exports = app;
