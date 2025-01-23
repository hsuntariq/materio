import { TextField, Typography } from "@mui/material";
import React from "react";
import TextEditor from "./TextEditor";

const ProductInformation = () => {
  return (
    <>
      <div className="card shadow border-0 p-3">
        <Typography variant="h6">Product Information</Typography>
        <TextField
          placeholder="iPhone14"
          variant="outlined"
          className="my-2"
          label="Product Name"
          name="product_name"
          sx={{
            "& label": {
              // color: "#8C57FF", // Label color
            },
            "& label.Mui-focused": {
              color: "#8C57FF", // Label color when focused
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                //   borderColor: "#8C57FF", // Default border color
              },
              "&:hover fieldset": {
                //   borderColor: "#8C57FF", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#8C57FF", // Border color when focused
              },
            },
          }}
        />
        <div className="row">
          <div className="col-sm-6">
            <TextField
              placeholder="FX123SKU"
              variant="outlined"
              className="my-2 w-100"
              label="SKU"
              name="product_sku"
              sx={{
                "& label": {
                  // color: "#8C57FF", // Label color
                },
                "& label.Mui-focused": {
                  color: "#8C57FF", // Label color when focused
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    //   borderColor: "#8C57FF", // Default border color
                  },
                  "&:hover fieldset": {
                    //   borderColor: "#8C57FF", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#8C57FF", // Border color when focused
                  },
                },
              }}
            />
          </div>
          <div className="col-sm-6">
            <TextField
              placeholder="0123-45678"
              variant="outlined"
              className="my-2 w-100"
              label="Barcode"
              name="product_barcode"
              sx={{
                "& label": {
                  // color: "#8C57FF", // Label color
                },
                "& label.Mui-focused": {
                  color: "#8C57FF", // Label color when focused
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    //   borderColor: "#8C57FF", // Default border color
                  },
                  "&:hover fieldset": {
                    //   borderColor: "#8C57FF", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#8C57FF", // Border color when focused
                  },
                },
              }}
            />
          </div>
        </div>
        <Typography variant="p" className="text-gray my-2">
          Description (Optional)
        </Typography>
        <TextEditor />
      </div>
    </>
  );
};

export default ProductInformation;