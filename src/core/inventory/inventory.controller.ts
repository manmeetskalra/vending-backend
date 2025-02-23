import { Request, Response } from "express";
import Inventory from "./inventory.model";

export const getInventory = async (req: Request, res: Response) => {
  try {
    const inventory = await Inventory.find({ available_units: { $gt: 0 } });
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const buyItem = async (req: Request, res: Response) => {
  try {
    const { name, quantity } = req.body;
    const item = await Inventory.findOne({ name });

    if (!item || item.available_units < quantity) {
      res.status(400).json({ message: "Product out of stoc" });
      return;
    }

    item.available_units = item.available_units - quantity;
    await item.save();

    res.json({ message: "Purchase succesful", item });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createInventory = async (req: Request, res: Response) => {
  try {
    const { items } = req.body;
    await Inventory.insertMany(items);
    res.status(201).json({ message: "Inventory created succssfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateInventory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedItem = await Inventory.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedItem) {
      res.status(404).json({ message: "Item not found" });
      return;
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
