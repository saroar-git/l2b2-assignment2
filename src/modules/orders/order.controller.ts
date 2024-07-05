import { Request, Response } from "express";
import { OrderServices } from "./order.services";
import orderValidationSchema from "./order.validation";

//* create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    // validation and create product
    const parsedOrderData = orderValidationSchema.parse(orderData);
    const result = await OrderServices.createOrderIntoDB(parsedOrderData);

    // success response
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      err,
    });
  }
};

//* get all orders and orders by email
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query as { email: string };
    const result = await OrderServices.getAllOrdersFromDB(email);

    if (!result || result.length === 0) {
      // if email does not match
      if (email) {
        return res.status(404).json({
          success: false,
          message: "No orders found for this email!",
        });
        // if collection is empty
      } else {
        return res.status(200).json({
          success: true,
          message: "No orders found!",
          data: [],
        });
      }
    }
    // if email match
    else if (email) {
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });

      // all order success response
    } else {
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
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

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
