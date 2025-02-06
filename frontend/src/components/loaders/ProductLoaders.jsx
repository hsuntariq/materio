import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductLoaders = () => {
  return (
    <>
      <div className="row  mx-auto container py-5">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <div key={index} className="col-md-3">
              <Skeleton width={"100%"} height={250} />
              <div className="d-flex justify-content-between">
                <Skeleton width={80} height={25} />
                <Skeleton width={30} height={25} />
              </div>

              <Skeleton width={"100%"} count={2} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductLoaders;
