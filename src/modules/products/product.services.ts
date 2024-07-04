import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// create a new product
const createProductIntoDB = async (productData: TProduct) => {
  const result = await ProductModel.create(productData);
  return result;
};

// get all products
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// get product by id
const getProductByIdFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

// update product by id

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB
};
