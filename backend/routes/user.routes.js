import express from "express";
import { getUserForSidebar } from "../controllers/user.controller";
import { isAuthenticated } from "../middleware/isAuthenticated";
const router = express.Router();
router.get("/", isAuthenticated, getUserForSidebar);
export default router;
