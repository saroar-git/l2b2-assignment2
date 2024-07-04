import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, "Product name is required"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
  },
  tags: {
    type: [String],
    required: [true, "Product tags is required"],
  },
  variants: [
    {
      type: {
        type: String,
        required: [true, "Product variant is required"],
        _id: false,
      },
      value: {
        type: String,
        required: [true, "Product value is required"],
        _id: false,
      },
    },
  ],
  inventory: {
    quantity: {
      type: Number,
      required: [true, "Product quantity value is required"],
    },
    inStock: {
      type: Boolean,
      default: true,
      required: [true, "Product quantity value is required"],
    },
  },
});

export const ProductModel = model<TProduct>("Product", productSchema);
