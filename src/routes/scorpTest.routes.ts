import express from "express";
import { getPosts, mergePosts } from "../controllers/scorpTestController";
import { validateRequestSchema } from "../middleware/validate.middleware";
const router = express.Router();

router.get("/get_posts", validateRequestSchema, getPosts);

router.get("/process_list_of_posts", validateRequestSchema, mergePosts);

export default router;
