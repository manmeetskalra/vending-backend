"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInventory = exports.createInventory = exports.buyItem = exports.getInventory = void 0;
const inventory_model_1 = __importDefault(require("./inventory.model"));
const getInventory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inventory = yield inventory_model_1.default.find({ available_units: { $gt: 0 } });
        res.json(inventory);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.getInventory = getInventory;
const buyItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, quantity } = req.body;
        const item = yield inventory_model_1.default.findOne({ name });
        if (!item || item.available_units < quantity) {
            res
                .status(400)
                .json({ message: "Item unavailable or not enough stock." });
            return;
        }
        item.available_units -= quantity;
        yield item.save();
        res.json({ message: "Purchase successful!", item });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.buyItem = buyItem;
const createInventory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { items } = req.body;
        yield inventory_model_1.default.insertMany(items);
        res.status(201).json({ message: "Inventory created successfully!" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.createInventory = createInventory;
const updateInventory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedItem = yield inventory_model_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedItem) {
            res.status(404).json({ message: "Item not found" });
            return;
        }
        res.json(updatedItem);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.updateInventory = updateInventory;
