import express, { Request, Response, Router } from "express";
const router: Router = express.Router();

import inventoryRouter from "./inventory/inventory.routes";
import authRouter from "./auth/auth.routes";

router.get("/", (req, res) => {
  res.status(200).send("Health Check API");
});

router.use("/auth", authRouter);
router.use("/inventory", inventoryRouter);

export default router;
