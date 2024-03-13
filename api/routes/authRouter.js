import express from "express";
import { google, signIn, signup } from "../controller/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signIn);
router.post("/google", google);


export default router;