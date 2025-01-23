import React from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import ProductsSection from "../../../components/admin/ProductsSection";

const AddProduct = () => {
  return (
    <>
      <div style={{}} className="container-fluid">
        <div className="row">
          <div className="col-xl-2 d-none d-xl-block">
            <AdminSidebar />
          </div>
          <div className="col-xl-10 col-12">
            <ProductsSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
