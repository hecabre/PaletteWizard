import { Router } from "express";
import {
  createPaleteColor,
  createPaleteRandom,
  createPaleteWord,
} from "../controllers/api.controllers.js";

const router = Router();

router.get("/color-palette/generate-color", createPaleteColor);
router.get("/color-palette/generate-word", createPaleteWord);
router.get("/color-palette/random", createPaleteRandom);
router.post("/color-palette/generate-color", createPaleteColor);
router.post("/color-palette/generate-word", createPaleteWord);
router.post("/color-palette/random", createPaleteRandom);

export default router;
