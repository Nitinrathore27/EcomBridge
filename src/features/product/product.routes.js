import express from "express";
import ProductController from "./product.controller.js";
import { upload } from "../../middlewares/fileupload.middleware.js";

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);
productRouter.post(
  "/",
  upload.single("imageUrl"),
  productController.addProduct
);
productRouter.get("/rate", productController.rateProduct);
productRouter.get("/filter", productController.filterProducts);

productRouter.get("/:id", productController.getProductById);
export default productRouter;
