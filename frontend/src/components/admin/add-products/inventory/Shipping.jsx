import { Radio, Typography } from "@mui/material";
import React from "react";

const Shipping = () => {
  return (
    <>
      <Typography className="text-secondary">ShippingType</Typography>
      <div className="d-flex">
        <Radio />
        <div className="d-flex flex-column mt-2">
          <Typography>Fullfilled by seller</Typography>
          <Typography className="text-sm text-secondary">
            You'll be responsible for product delivery. Any damage or delay
            during shipping may cost you a Damage fee
          </Typography>
        </div>
      </div>
      <div className="d-flex">
        <Radio />
        <div className="d-flex my-2 flex-column">
          <Typography>Fulfilled by Company namer</Typography>
          <Typography className="text-sm text-secondary">
            YYour product, Our responsibility.For a measly fee, we will handle
            the delivery process for you.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Shipping;
