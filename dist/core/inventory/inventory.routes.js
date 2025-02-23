"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inventory_controller_1 = require("./inventory.controller");
const middleware_1 = require("../middleware/middleware");
const router = express_1.default.Router();
router.get("/", inventory_controller_1.getInventory);
router.post("/buy", inventory_controller_1.buyItem);
router.post("/admin", middleware_1.validateAdmin, inventory_controller_1.createInventory);
router.put("/admin/:id", middleware_1.validateAdmin, inventory_controller_1.updateInventory);
exports.default = router;
