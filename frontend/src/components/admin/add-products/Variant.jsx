import {
  Button,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BsPlug, BsPlus } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import VariantInputs from "./VariantInputs";

const Variant = () => {
  const [variants, setVariant] = useState([
    { size: "", variantValue: "", id: Date.now() },
  ]);
  const addField = () => {
    setVariant([...variants, { size: "", variantValue: "", id: Date.now() }]);
  };

  const removeVariantInput = (id) => {
    alert(id);
    let newVariants = variants.filter((item, index) => {
      return item?.id !== id;
    });

    setVariant(newVariants);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setVariant((prevVariants) =>
      prevVariants.map((variant) =>
        variant.id === id ? { ...variant, [name]: value } : variant
      )
    );
  };

  return (
    <>
      <div className="card p-3 shadow border-0">
        <Typography variant="h6">Product Variant</Typography>

        <div className="row">
          {variants?.map((item, index) => {
            return (
              <VariantInputs
                handleChange={handleChange}
                {...item}
                key={index}
                removeVariantInput={removeVariantInput}
              />
            );
          })}
        </div>
        <Button
          onClick={addField}
          className="bg-purple align-self-start text-white "
        >
          <BsPlus /> Add Another Option
        </Button>
      </div>
    </>
  );
};

export default Variant;
