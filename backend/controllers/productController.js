const handler = require("express-async-handler");
const productModel = require("../models/productModel");

const addProduct = handler(async (req, res) => {
  // are we getting data from the frontend
  const user_id = req.user._id;
  const {
    product_name,
    product_sku,
    product_barcode,
    product_description,
    product_base_price,
    product_discounted_price,
    product_tax,
    product_stock,
    product_images,
    product_variant,
  } = req.body;

  if (
    !product_name ||
    !product_sku ||
    !product_barcode ||
    !product_description ||
    !product_base_price ||
    !product_discounted_price ||
    !product_tax ||
    !product_stock ||
    !product_images ||
    !product_variant
  ) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  //   find products based on sku or barcode

  const findProduct = await productModel.findOne({
    $or: [{ product_barcode }, { product_sku }],
  });

  if (findProduct) {
    res.status(405);
    throw new Error("Product already exists");
  }

  //   add the datra into the database

  const createdProduct = await productModel.create({
    product_name,
    product_sku,
    product_barcode,
    product_description,
    product_base_price,
    product_discounted_price,
    product_tax,
    product_stock,
    product_images,
    product_variant,
    user: user_id,
  });

  res.send(createdProduct);
});

const getAllProduct = handler(async (req, res) => {
  let allProducts = await productModel.find();
  res.send(allProducts);
});

const deleteAllProducts = async (req, res) => {
  try {
    await productModel.deleteMany({}); // Correct method
    res.send("All products deleted successfully");
  } catch (error) {
    res.status(500).json({ message: "Error deleting products", error });
  }
};

module.exports = {
  addProduct,
  getAllProduct,
  deleteAllProducts,
};
