const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product_name: {
      type: String,
      required: true,
    },
    product_sku: {
      type: String,
      required: true,
      unique: true,
    },
    product_barcode: {
      type: String,
      required: true,
      unique: true,
    },
    product_description: {
      type: String,
      required: true,
    },
    product_base_price: {
      type: Number,
      required: true,
    },
    product_discounted_price: {
      type: Number,
      required: true,
    },
    product_tax: {
      type: Boolean,
      required: true,
      default: true,
    },
    product_stock: {
      type: Boolean,
      required: true,
      default: true,
    },
    product_images: {
      type: Array,
      required: true,
      default: [],
    },
    product_variant: {
      type: Array,
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", productSchema);
