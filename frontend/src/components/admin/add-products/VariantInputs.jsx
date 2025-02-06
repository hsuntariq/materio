import React, { useState } from "react";
import {
  Button,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { IoClose } from "react-icons/io5";

const VariantInputs = ({ id, count, setCount, handleChange }) => {
  const removeVariantInput = (id) => {
    const newCount = count.filter((item) => item.id !== id);
    setCount(newCount);
  };

  return (
    <>
      <div className="d-flex mb-1 align-items-center gap-2">
        <TextField
          variant="outlined"
          label="Select Variant"
          select
          className="w-25 my-2"
          name="type"
          value={count?.type}
          onChange={(e) => handleChange(id, e)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#8B50F8", // Change this to your desired color
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#8B50F8", // Change label color on focus
              },
            },
          }}
        >
          <MenuItem value="wize">Size</MenuItem>
          <MenuItem value="weight">Weight</MenuItem>
          <MenuItem value="color">Color</MenuItem>
          <MenuItem value="smell">Smell</MenuItem>
        </TextField>

        <TextField
          variant="outlined"
          label="Variant Value"
          className="w-100 my-2"
          placeholder="Enter Variant Value"
          name="variant"
          value={count?.variant}
          onChange={(e) => handleChange(id, e)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#8B50F8", // Change this to your desired color
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#8B50F8", // Change label color on focus
              },
            },
          }}
        />
        <IconButton onClick={() => removeVariantInput(id)}>
          <IoClose />
        </IconButton>
      </div>
    </>
  );
};

export default VariantInputs;
