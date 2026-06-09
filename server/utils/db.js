import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const URI = process.env.MONGODB_URI;
        await mongoose.connect(URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to the database:", error);
        process.exit(0);
    }
}

export default connectDb;