import mongoose from "mongoose";

const comapanySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    description:{
        type:String,
    },
    website:{
        type:String,
    },
    location:{
        type:String,
    },
    logo:{
        type:String, //url for comapany logo
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User', //it will be relationship objectid for user who has created opening
        required:true
    },
}, {timestamps:true})
export const Company = mongoose.model('Company', comapanySchema)