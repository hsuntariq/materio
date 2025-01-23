const express = require("express");
const authHandler = require("../middlewares/authMiddleware");
const { addProduct } = require("../controllers/productController");

const productRouter = express.Router();

productRouter.post("/add-product", authHandler, addProduct);

module.exports = productRouter;
