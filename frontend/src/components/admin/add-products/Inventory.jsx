import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { BsCarFront, BsGlobe, BsLink, BsLock, BsPlus } from "react-icons/bs";
import Restock from "./inventory/Restock";
import Shipping from "./inventory/Shipping";
import Global from "./inventory/Global";
import Attributes from "./inventory/Attributes";
import Advance from "./inventory/Advance";

const Inventory = () => {
  const [selected, setSelected] = useState("restock");
  return (
    <>
      <div className="card p-4 shadow border-0">
        <Typography variant="h6">Inventory</Typography>
        <div className="row">
          <div className="col-sm-4">
            <ul className="list-unstyled d-flex flex-column gap-2">
              <Button
                onClick={() => setSelected("restock")}
                className={`d-flex gap-2 text-start justify-content-start text-dark p-2 rounded-2 cursor-pointer ${
                  selected == "restock" && "bg-purple text-white fw-semibold"
                } `}
              >
                <BsPlus />
                <Typography className="">Restock</Typography>
              </Button>
              <Button
                onClick={() => setSelected("shipping")}
                className={`d-flex gap-2 text-start justify-content-start text-dark p-2 rounded-2 cursor-pointer ${
                  selected == "shipping" && "bg-purple text-white fw-semibold"
                } `}
              >
                <BsCarFront />
                <Typography className="">Shipping</Typography>
              </Button>
              <Button
                onClick={() => setSelected("global")}
                className={`d-flex gap-2 text-start justify-content-start text-dark p-2 rounded-2 cursor-pointer ${
                  selected == "global" && "bg-purple text-white fw-semibold"
                } `}
              >
                <BsGlobe />
                <Typography className="">Global Delivery</Typography>
              </Button>
              <Button
                onClick={() => setSelected("attributes")}
                className={`d-flex gap-2 text-start justify-content-start text-dark p-2 rounded-2 cursor-pointer ${
                  selected == "attributes" && "bg-purple text-white fw-semibold"
                } `}
              >
                <BsLink />
                <Typography className="">Attributes</Typography>
              </Button>
              <Button
                onClick={() => setSelected("advance")}
                className={`d-flex gap-2 text-start justify-content-start text-dark p-2 rounded-2 cursor-pointer ${
                  selected == "advance" && "bg-purple text-white fw-semibold"
                } `}
              >
                <BsLock />
                <Typography className="">Advance</Typography>
              </Button>
            </ul>
          </div>
          <div className="col-md-8">
            {selected == "restock" && <Restock />}
            {selected == "shipping" && <Shipping />}
            {selected == "global" && <Global />}
            {selected == "attributes" && <Attributes />}
            {selected == "advance" && <Advance />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
