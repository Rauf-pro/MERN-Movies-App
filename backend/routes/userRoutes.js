import express from "express";

// controllers

import { createUser, loginUser, logCurrentUser , getAllUsers, getCurrentUserProfile, updateCurrentUserProfile} from "../controllers/userController.js";

//middlewares

import {authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js"

const router = express.Router();

router.route("/").post(createUser).get(authenticate, authorizeAdmin, getAllUsers);
router.post("/auth", loginUser);
router.post("/logout", logCurrentUser);
router.route("/profile").get(authenticate, getCurrentUserProfile).put(authenticate, updateCurrentUserProfile);


export default router;