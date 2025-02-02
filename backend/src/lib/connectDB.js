import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODBURI);
  } catch (error) {
    console.log("Database Connection Error", error);
  }
};

export default connectDB;
