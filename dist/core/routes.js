"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const inventory_routes_1 = __importDefault(require("./inventory/inventory.routes"));
// import authRouter from "./auth/auth.routes";
router.get("/", (req, res) => {
    res.status(200).send("Health Check API");
});
// router.use("/auth", authRouter);
router.use("/inventory", inventory_routes_1.default);
exports.default = router;
