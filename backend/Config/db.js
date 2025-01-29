import mongoose from "mongoose";

import { ENV_VARS } from "./envVars.js";

export const connectDB = async () =>{

    try{

        const conn= await mongoose.connect(ENV_VARS.MONGO_URI);
        console.log("MONGO DB CONECTED : " + conn.connection.host );
    }
    catch(error){
        console.error("error MongoDB to :"+ error.message);
        process.exit(1);

    }
}