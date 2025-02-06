import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { Button, Typography } from "@mui/material";
import ProductInformation from "./add-products/ProductInformation";
import ProductPricing from "./add-products/ProductPricing";
import Image from "./add-products/Image";
import Variant from "./add-products/Variant";
import Inventory from "./add-products/Inventory";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductData,
  productReset,
} from "../../features/products/productSlice";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
const ProductsSection = () => {
  const [formFields, setFormFields] = useState({
    product_name: "",
    product_sku: "",
    product_barcode: "",
    product_description: "",
    product_base_price: "",
    product_discounted_price: "",
    product_tax: true,
    product_stock: true,
    product_images: [],
    product_variant: [],
  });

  // destructure

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
  } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]:
        e.target.type == "checkbox" || e.target.type == "switch"
          ? e.target.checked
          : e.target.value,
    });
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { productError, productSuccess, productLoading, productMessage } =
    useSelector((state) => state.items);

  useEffect(() => {
    if (productError) {
      toast.error(productMessage);
    }

    if (productSuccess) {
      toast.success("Product Uploaded", {
        icon: "📦",
      });
    }

    dispatch(productReset());
  }, [productError, productSuccess, dispatch]);

  const publishProduct = () => {
    const productData = {
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
      user: user?._id,
    };

    dispatch(addProductData(productData));
  };

  return (
    <>
      <AdminHeader />
      <div className="d-flex p-4 align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <Typography variant="h5">Add a new Product</Typography>
          <Typography className="text-secondary my-2">
            Orders placed across your store
          </Typography>
        </div>
        <div className="d-flex gap-3">
          <Button
            variant="outlined"
            className="text-secondary border border-secondary fw-semibold"
          >
            Discard
          </Button>
          <Button
            variant="outlined"
            className="text-purple  border-purple fw-semibold"
          >
            Save draft
          </Button>
          <Button
            disabled={productLoading}
            onClick={publishProduct}
            variant="contained"
            className={`text-white  fw-semibold ${
              productLoading ? "bg-secondary" : "bg-purple"
            } `}
          >
            {productLoading ? (
              <ClipLoader color="white" size={20} />
            ) : (
              "Publish product"
            )}
          </Button>
        </div>
      </div>

      <div className="p-4 row">
        <div className="col-md-8">
          <ProductInformation
            handleChange={handleChange}
            formFields={formFields}
            {...formFields}
            setFormFields={setFormFields}
          />
        </div>
        <div className="col-md-4">
          <ProductPricing
            handleChange={handleChange}
            formFields={formFields}
            setFormFields={setFormFields}
          />
        </div>
      </div>

      <div className="p-4 row">
        <div className="col-md-8">
          <Image {...formFields} setFormFields={setFormFields} />
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="p-4 row">
        <div className="col-md-8">
          <Variant formFields={formFields} setFormFields={setFormFields} />
        </div>
      </div>
      <div className="p-4 row">
        <div className="col-md-8">
          <Inventory />
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
