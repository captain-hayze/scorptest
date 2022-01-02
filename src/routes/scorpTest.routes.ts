import express from "express";
import {} from "../controllers/scorpTestController";
import { validateRequestSchema } from "../middleware/validate.middleware";
const router = express.Router();

router.post("/createbrand", validateRequestSchema);

export default router;
