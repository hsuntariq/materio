const express = require("express");
const authHandler = require("../middlewares/authMiddleware");
const {
  addProduct,
  getAllProduct,
  deleteAllProducts,
} = require("../controllers/productController");

const productRouter = express.Router();

productRouter.post("/add-product", authHandler, addProduct);
productRouter.get("/get-products", getAllProduct);
productRouter.delete("/delete-products", deleteAllProducts);

module.exports = productRouter;
