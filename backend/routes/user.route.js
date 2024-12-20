import express from "express";
import { login, logout, register, updateProfile } from "../controller/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.post("/register",register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").put(isAuthenticated, updateProfile);

export default router;
