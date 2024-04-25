import express from "express";

// controllers

import { createUser, loginUser, logCurrentUser } from "../controllers/userController.js";

//middlewares



const router = express.Router();

router.route("/").post(createUser);
router.post("/auth", loginUser);
router.post("/logout", logCurrentUser);


export default router;