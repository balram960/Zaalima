import express from "express";
import { analyzeJD, rewriteResumeBullet, getATSScore } from "../controllers/aiController.js";

const router = express.Router();

router.post("/analyze-jd", analyzeJD);
router.post("/rewrite", rewriteResumeBullet);
router.post("/ats-score", getATSScore);

router.get("/health", (req, res) => {
  res.json({ status: "AI routes are working", timestamp: new Date() });
});

export default router;
