import express from "express";
import {
  getInventory,
  buyItem,
  createInventory,
  updateInventory,
} from "./inventory.controller";
import { validateAdmin } from "../middleware/middleware";

const router = express.Router();

router.get("/", getInventory);
router.post("/buy", buyItem);

router.post("/admin", validateAdmin, createInventory);
router.put("/admin/:id", validateAdmin, updateInventory);

export default router;
