import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL,{dbName:'todoproject'});
    console.log(`Database Connected on ${connection.host}`);
  } catch (error) {
    console.log("Error", error);
  }
};
