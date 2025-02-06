import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { GoPlus } from "react-icons/go";
import VariantInputs from "./VariantInputs";

const Variant = ({ formFields, setFormFields }) => {
  const [count, setCount] = useState([
    { id: Date.now(), type: "", variant: "" },
  ]);

  const handleCount = (id, e) => {
    const { name, value } = e.target;
    const updatedCount = count.map((item) =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setCount(updatedCount);
  };

  useEffect(() => {
    setFormFields((prevValues) => ({
      ...prevValues,
      product_variant: count,
    }));
  }, [count]);

  return (
    <div className="card p-4 shadow my-2 border-0">
      <Typography variant="h6" className="mb-2">
        Product Variants
      </Typography>
      {count.map((item) => (
        <VariantInputs
          key={item.id}
          id={item.id}
          count={count}
          setCount={setCount}
          handleChange={handleCount}
        />
      ))}
      <Button
        onClick={() =>
          setCount([...count, { id: Date.now(), type: "", variant: "" }])
        }
        sx={{
          width: "max-content",
          background: "#8B50F8",
          color: "white",
          fontWeight: "500",
        }}
      >
        <GoPlus fontWeight={"bold"} size={20} />
        Add Another Option
      </Button>
    </div>
  );
};

export default Variant;
