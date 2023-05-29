import { Router } from "express";
import {
  cancelPayment,
  captureOrder,
  createOrder,
} from "../controllers/payments.controllers.js";

const router = Router();

router.get("/create-order", createOrder);
router.get("/capture-order", captureOrder);
router.get("/cancel-order", cancelPayment);

export default router;
