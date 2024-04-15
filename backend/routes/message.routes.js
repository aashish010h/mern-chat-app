import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

import { sendMessage, getMessages } from "../controllers/message.controller.js";

const router = express.Router();
router.post("/send/:id", isAuthenticated, sendMessage);
router.get("/get/:id", isAuthenticated, getMessages);
export default router;
