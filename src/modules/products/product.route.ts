import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getProductById);
router.put("/:id", ProductControllers.updateProductById);
router.delete("/:id", ProductControllers.deleteProductById);

export const ProductRoutes = router;
