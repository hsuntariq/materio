import { MenuItem, TextField, Typography } from "@mui/material";
import React from "react";

const Advance = () => {
  return (
    <>
      <Typography className="text-secondary">Advanced</Typography>
      <div className="row">
        <div className="col-sm-7">
          <TextField select label="Product ID Type" className="w-100">
            <MenuItem value="ISBN">ISBN</MenuItem>
            <MenuItem value="UPC">UPC</MenuItem>
            <MenuItem value="EAN"> EAN</MenuItem>
            <MenuItem value="JAN">JAN</MenuItem>
          </TextField>
        </div>
        <div className="col-sm-5">
          <TextField label="Product ID" placeholder="10023" className="w-100" />
        </div>
      </div>
    </>
  );
};

export default Advance;
