import express from "express";
import { signIn, signup } from "../controller/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signIn);


export default router;