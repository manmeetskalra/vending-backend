"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginAdmin = (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
        const token = jsonwebtoken_1.default.sign({ admin: "admin" }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(200).send({
            message: "Login successfull!",
        });
    }
    res.status(401).json({ message: "Invalid credentials" });
};
exports.loginAdmin = loginAdmin;
