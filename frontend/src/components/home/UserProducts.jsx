import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import ProductLoaders from "../loaders/ProductLoaders";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../features/products/productSlice";
import { Button, Card } from "@mui/material";
import { Heart } from "lucide-react";
const UserProducts = () => {
  const dispatch = useDispatch();
  const { productLoading, products } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  return (
    <>
      {productLoading ? (
        <ProductLoaders />
      ) : (
        <>
          <div className="row  mx-auto col-xl-10 col-11 py-5">
            {products?.length > 0 ? (
              <>
                {products?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-xl-2 my-2 col-lg-2 col-md-4 "
                    >
                      <div className="card border-0 shadow-sm">
                        <div className="position-relative">
                          <img
                            variant="top"
                            src={item?.product_images[0]}
                            alt="Product"
                            style={{
                              height: "200px",
                              width: "200px",
                              objectFit: "cover",
                            }}
                            className="p-2 w-100"
                          />
                          {/* Gift Icon */}
                          <span className="position-absolute top-0 start-100 translate-middle badge bg-light text-dark rounded-circle p-2">
                            🎁
                          </span>
                          {/* Heart Icon */}
                          <Heart
                            size={20}
                            className="position-absolute top-0 end-0 m-2 text-dark"
                          />
                        </div>
                        <div className="card-body">
                          <div className="fw-bold">$79.99</div>
                          <div>
                            LEGO Art LOVE Collectible Building Set for Adults -
                            Gift Idea for...
                          </div>
                          <Button variant="outline-dark" className="w-100">
                            + Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <h2 className="text-center">No Products</h2>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default UserProducts;
