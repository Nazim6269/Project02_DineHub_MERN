import mongoose from "mongoose";
import { mongoURL } from "../secret.js";

const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(mongoURL, options);
    console.log("DB is connected successfully");

    mongoose.connection.on("error", (error) => {
      console.log("Db connection error", error);
    });
  } catch (error) {
    console.log("DB is not connected", error.toString());
  }
};

export default connectDB;
