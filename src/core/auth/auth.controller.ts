import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginAdmin = (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    const token = jwt.sign({ admin: "admin" }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    res.status(200).send({
      message: "Login successfull!",
      token,
    });
    return;
  }
  res.status(401).json({ message: "Invalid credentials" });
  return;
};
