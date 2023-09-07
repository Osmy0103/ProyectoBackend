import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://osmy-0103:mariposadeamor20@cluster0.gcg1s3n.mongodb.net/");
            console.log("Base de datos conectada")
  } catch (error) {
        console.log(error);
    }
};
