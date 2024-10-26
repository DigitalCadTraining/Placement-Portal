import bcrpt from "bcryptjs"
import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    roll:{
        type:String,
        enum:['student','recruiter'], //for many options and to choose one
        require:true,
    },
    profile:{
        bio:{type:String},
        skills:{type:String},
        resume:{type:String}, //url can be added
        resumeOriginalName:{type:String}, //actual file name with extension also 
        company:{type:mongoose.Schema.Types.ObjectId, ref: 'Company'}, //we will create relationship between comapny schenma and there we will create ref id for this chsnema
        profilePhoto:{
            type:String,
            default:""
        }
    },
},{timestamps:true});
export const User = mongoose.model('User', userSchema);