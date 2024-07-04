import { Request, Response } from "express";
import { ProductServices } from "./product.services";

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

export const ProductControllers = {
  createProduct,
};
