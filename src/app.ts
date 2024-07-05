import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/products/product.route";
import { OrderRoutes } from "./modules/orders/order.route";

const app: Application = express();

//* parsers
app.use(express.json());
app.use(cors());

//* products routes
app.use("/api/products", ProductRoutes);

//* orders routes
app.use("/api/orders", OrderRoutes);

//* not found route
app.use((req: Request, res: Response) => {
  if (req.method === "GET" && req.originalUrl === "/") {
    res.json({ success: true, message: "Welcome to Product Management APIs" });
    return;
  }
  res.status(404).json({ success: false, message: "Route not found" });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Product Management APIs");
});

export default app;
