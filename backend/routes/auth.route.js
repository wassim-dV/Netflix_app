import express from "express";
import { logine, logout, signup , authCheck} from "../controllers/auth.caontroller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/logine", logine);
router.post("/logout", logout);
router.post("/authCheck" ,authCheck);


export default router;
