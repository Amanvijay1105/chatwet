import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);
    console.log("URI starts with:", process.env.MONGODB_URI?.substring(0, 20));

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB Error:", error);
  }
};

export default connectToMongoDB;