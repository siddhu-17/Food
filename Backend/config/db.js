

import mongoose from "mongoose";  

export const connectDB = async () => {
  try {
    await mongoose.connect(' mongodb+srv://greatstack:<db_password>@cluster0.erikw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
   
    console.log("DB Connected");
  } catch (error) {
    console.error("Connection failed:", error.message);
  }
};
