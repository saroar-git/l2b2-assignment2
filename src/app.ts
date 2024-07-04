import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/products/product.route";

const app: Application = express();

//* parsers
app.use(express.json());
app.use(cors());

//* products routes
app.use("/api/products", ProductRoutes);

//* orders routes
// app.use( "/api/orders", OrderRoutes );

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
