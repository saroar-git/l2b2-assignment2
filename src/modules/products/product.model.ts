import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const variantSchema = new Schema(
  {
    type: {
      type: String,
      required: [true, "Product variant type is required"],
    },
    value: {
      type: String,
      required: [true, "Product variant value is required"],
    },
  },
  { _id: false },
);

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
  variants: {
    type: [variantSchema],
    required: [true, "Product variants are required"],
  },
  inventory: {
    quantity: {
      type: Number,
      required: [true, "Product quantity value is required"],
    },
    inStock: {
      type: Boolean,
      default: true,
      required: [true, "Product inStock value is required"],
    },
  },
});

export const ProductModel = model<TProduct>("Product", productSchema);
