 import mongoose, { Types } from "mongoose";

 const userschema = new mongoose.Schema({

    username:{
        type : String,
        required:true,
        unique:true ,

    },
    email:{
        type :String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true
        },
        image:{
            type:String,
            default:""
        },
        seaarchHistory:{
            type:Array,
            default:[]
        }
 })
 export const User =mongoose.model("User",userschema);