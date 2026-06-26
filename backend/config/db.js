const mongoose = require("mongoose");

let isConnected = false;
let connectionPromise = null;

const connectDB = async () => {
  try {
    if (isConnected) {
      return;
    }

    if (mongoose.connection.readyState === 1) {
      isConnected = true;
      return;
    }

    if (connectionPromise) {
      await connectionPromise;
      return;
    }

    connectionPromise = mongoose.connect(process.env.MONGO_URI);
    const conn = await connectionPromise;
    isConnected = true;
    connectionPromise = null;

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    connectionPromise = null;
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = connectDB;
