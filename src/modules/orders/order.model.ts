import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  productId: {
    type: String,
    required: [true, "ProductId is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
  },
});

export const OrderModel = model<TOrder>("Order", orderSchema);
