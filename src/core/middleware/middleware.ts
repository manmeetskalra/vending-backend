import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  admin?: string;
}

export const validateAdmin = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: "Token empty. Prohibited" });
    return;
  }

  try {
    const jwt_secret = process.env.JWT_SECRET;
    if (!jwt_secret) {
      throw new Error("Invalid env variable");
    }
    const decoded = jwt.verify(token, jwt_secret) as {
      admin: string;
    };

    req.admin = decoded.admin;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};
