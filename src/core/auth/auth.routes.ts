import express from "express";
import { loginAdmin } from "./auth.controller";

const router = express.Router();

router.post("/login", loginAdmin);

export default router;
