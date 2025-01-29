import express from "express";
import { logine, logout, signup } from "../controllers/auth.caontroller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/logine", logine);
router.post("/logout", logout);

export default router;
