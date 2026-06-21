import mongoose from "mongoose";

const bedSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
});

export default mongoose.models.BedType || mongoose.model("BedType",bedSchema);
