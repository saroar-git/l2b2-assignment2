import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import { TProduct } from "./product.interface";
import { ZodError } from "zod";
import {
  productValidationSchema,
  partialProductValidationSchema,
} from "./product.validation";

//* Create a New Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // validation and create product
    const parsedProductData = productValidationSchema.parse(productData);
    const result = await ProductServices.createProductIntoDB(parsedProductData);

    // success response
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      data: error,
    });
  }
};

//* Retrieve a List of All Products and search term for them
const getAllProducts = async (req: Request, res: Response) => {
  try {
    // search functionality
    const searchTerm = req.query.searchTerm;
    const query: any = {};

    // search based on the name, category, or variants
    if (searchTerm) {
      query.$or = [
        { name: { $regex: searchTerm, $options: "i" } },
        { category: { $regex: searchTerm, $options: "i" } },
        { "variants.type": { $regex: searchTerm, $options: "i" } },
        { "variants.value": { $regex: searchTerm, $options: "i" } },
      ];
    }

    // get all products from the database
    const result = await ProductServices.getAllProductsFromDB(query);

    // if no products are found
    if (!result || result.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // if no search term is provided, return all products
    if (!searchTerm) {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }

    // return the products matching the search term
    else {
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error,
    });
  }
};

//* Retrieve a Specific Product by ID
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductByIdFromDB(productId);

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // success response
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      data: error,
    });
  }
};

//* Update a Specific Product by ID
const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    // validation and update product data
    const parsedProductData = partialProductValidationSchema.parse(updateData);
    const result = await ProductServices.updateProductByIdFromDB(
      productId,
      parsedProductData as TProduct,
    );

    // success response
    if (result) {
      res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        product: result,
      });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err: any) {
    if (err instanceof ZodError) {
      res.status(400).json({ message: "Validation error", errors: err.errors });
    } else {
      res.status(500).json({
        message: "An error occurred while updating the product",
        error: err.message,
      });
    }
  }
};

//* Delete a Specific Product by ID
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductByIdFromDB(productId);

    // if product does not match
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // success response
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
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
