import { Request, Response } from "express";
import { ProductServices } from "./product.services";

// Create a New Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductServices.createProductIntoDB(productData);

    // success response
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: error,
    });
  }
};

// Retrieve a List of All Products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    // success response
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: error,
    });
  }
};

// Retrieve a Specific Product by ID
const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const result = await ProductServices.getProductByIdFromDB(productId);

    // success response
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: error,
    });
  }
};

// Update a Specific Product by ID
const updateProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const productData = req.body;
    const result = await ProductServices.updateProductByIdFromDB(
      productId,
      productData,
    );

    // success response
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: error,
    });
  }
};

// Delete a Specific Product by ID
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const result = await ProductServices.deleteProductByIdFromDB(productId);

    // success response
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
