import mongoose from "mongoose";

export default async function connectDB()
{
    const MONGODB_URI=process.env.MONGODB_URI;
    try{
      await  mongoose.connect(MONGODB_URI);
    }catch(error)
    {
        console.log(error);
    }
}
