import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  available_units: { type: Number, required: true },
  display_image_url: {
    type: String,
    default: "http://example.com/images/default.jpg",
  },
});

export default mongoose.model("Inventory", InventorySchema);
