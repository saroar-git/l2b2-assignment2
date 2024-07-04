import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// create a new product
const createProductIntoDB = async (productData: TProduct) => {
  const result = await ProductModel.create(productData);
  return result;
};

// get all products and query search
export const getAllProductsFromDB = async (
  query: any = {},
): Promise<TProduct[]> => {
  return await ProductModel.find(query);
};

// get single product by id
const getSingleProductByIdFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

// update product by id
const updateProductByIdFromDB = async (id: string, productData: TProduct) => {
  const result = await ProductModel.findByIdAndUpdate(id, productData);
  return result;
};

// delete product by id
const deleteProductByIdFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductByIdFromDB,
  updateProductByIdFromDB,
  deleteProductByIdFromDB,
};
