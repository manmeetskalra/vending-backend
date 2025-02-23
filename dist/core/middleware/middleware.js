"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateAdmin = (req, res, next) => {
    const token = req.headers.authorization;
    //   const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        res.status(401).json({ message: "Token empty. Prohibited" });
        return;
    }
    try {
        const jwt_secret = process.env.JWT_SECRET;
        if (!jwt_secret) {
            throw new Error("Invalid env variable");
        }
        const decoded = jsonwebtoken_1.default.verify(token, jwt_secret);
        req.admin = decoded.admin;
        next();
    }
    catch (error) {
        res.status(400).json({ message: "Invalid token." });
    }
};
exports.validateAdmin = validateAdmin;
