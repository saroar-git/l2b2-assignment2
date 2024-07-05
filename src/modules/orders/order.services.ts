import { ProductModel } from "../products/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

//* Create a New Order
const createOrderIntoDB = async (order: TOrder) => {
  const product = await ProductModel.findById(order.productId);

  // if product is not found, throw an error
  if (!product) {
    throw new Error("Product not found");
  }

  // check stock availability and throw an error for negative
  const isSufficientQuantity = product.inventory.quantity - order.quantity >= 0;
  if (!isSufficientQuantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  // create order
  const result = await OrderModel.create(order);

  // calculate new quantity and update stock and inStock status
  const newQuantity = product.inventory.quantity - order.quantity;
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    product._id,
    {
      "inventory.quantity": newQuantity,
      "inventory.inStock": newQuantity > 0,
    },
    { new: true },
  );

  // if the product update fails, throw an error
  if (!updatedProduct) {
    throw new Error("Failed to update product inventory");
  }

  return result;
};

//* Retrieve all order from database
const getAllOrdersFromDB = async (email: string): Promise<TOrder[] | null> => {
  const $regex = new RegExp(email, "i");

  const result = await OrderModel.find({
    $or: [{ email: { $regex } }],
  });
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
