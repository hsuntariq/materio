import { IconButton, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { IoClose } from "react-icons/io5";

const VariantInputs = ({
  size,
  variantValue,
  id,
  removeVariantInput,
  handleChange,
}) => {
  return (
    <>
      <div className="col-sm-4">
        <TextField
          select
          value={size}
          onChange={(e) => handleChange(e, id)}
          displayEmpty
          variant="outlined"
          className="my-2 w-100"
          name="product_variant"
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
        >
          <MenuItem value="size">Size</MenuItem>
          <MenuItem value="color">Color</MenuItem>
          <MenuItem value="weight">Weight</MenuItem>
          <MenuItem value="smell">Smell</MenuItem>
        </TextField>
      </div>
      <div className="col-sm-8">
        <div className="d-flex">
          <TextField
            value={variantValue}
            onChange={(e) => handleChange(e, id)}
            placeholder="Enter variant value"
            variant="outlined"
            className="my-2 w-100"
            label="Variant Value"
            name="product_variant_value"
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
          <IconButton onClick={() => removeVariantInput(id)}>
            <IoClose />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default VariantInputs;
