"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const InventorySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    available_units: { type: Number, required: true },
    display_image_url: {
        type: String,
        default: "http://example.com/images/default.jpg",
    },
});
exports.default = mongoose_1.default.model("Inventory", InventorySchema);
