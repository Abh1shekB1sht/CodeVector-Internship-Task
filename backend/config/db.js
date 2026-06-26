const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  try {
    if (isConnected) {
      return;
    }

    if (mongoose.connection.readyState === 1) {
      isConnected = true;
      return;
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
