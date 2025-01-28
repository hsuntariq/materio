import React from "react";
import AdminHeader from "./AdminHeader";
import { Button, Typography } from "@mui/material";
import ProductInformation from "./add-products/ProductInformation";
import ProductPricing from "./add-products/ProductPricing";
import Image from "./add-products/Image";

const ProductsSection = () => {
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
            variant="contained"
            className="text-white bg-purple fw-semibold"
          >
            Publish product
          </Button>
        </div>
      </div>

      <div className="p-4 row">
        <div className="col-md-8">
          <ProductInformation />
        </div>
        <div className="col-md-4">
          <ProductPricing />
        </div>
      </div>

      <div className="p-4 row">
        <div className="col-md-8">
          <Image />
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default ProductsSection;
