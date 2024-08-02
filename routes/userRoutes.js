import express from "express";
import {
    createUser,
    signinUser,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile
} from '../controllers/userController.js';
import authMiddleware from "../middlewares/authMiddleware.js"

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", signinUser);
router.get("/profile", authMiddleware, getUserProfile);
router.patch("/update", authMiddleware, updateUserProfile)
router.delete("/delete", authMiddleware, deleteUserProfile)


export default router;