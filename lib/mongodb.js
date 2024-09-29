import mongoose from "mongoose";

export const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to Mongodb");
        
    } catch (error) {
        console.log("Cennection error" , error );
        
    }
}