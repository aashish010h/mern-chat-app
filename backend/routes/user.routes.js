import express from "express";
import { getUserForSidebar } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
const router = express.Router();
router.get("/", isAuthenticated, getUserForSidebar);
export default router;
