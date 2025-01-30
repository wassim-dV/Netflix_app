import express from "express";
import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./Config/envVars.js";
import {connectDB} from "./Config/db.js"
import movieRoutes from "./routes/movies.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.roue.js";

import cookieParser from "cookie-parser";
import { protectRoute } from "./middleware/protectRoute.js";




const app = express();

const PORT =ENV_VARS.PORT 

app.use(express.json()); 
app.use(cookieParser())// will allow us to parse req.body


app.use("/api/v1/auth", authRoutes); // أزلنا المسافة الإضافية هنا
app.use("/api/v1/movie",protectRoute, movieRoutes);
app.use("/api/v1/tv",protectRoute , tvRoutes);
app.use("/api/v1/search",protectRoute , searchRoutes);




app.listen(PORT, () => {
    console.log("server running on port 5000"+ PORT);
    connectDB();
});


//ndCbMS1OvH1yzcbE
//PtEY/ddV5@LJFfW postman



