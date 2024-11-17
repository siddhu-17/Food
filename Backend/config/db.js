

import mongoose from "mongoose";  

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://greatstack:5316@cluster0.erikw.mongodb.net/food?retryWrites=true&w=majority');
    console.log("DB Connected");
  } catch (error) {
    console.error("Connection failed:", error.message);
  }
};
