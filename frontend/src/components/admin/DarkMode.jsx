import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GoCpu, GoMoon, GoSun } from "react-icons/go";

export default function DarkMode({ darkMode, setDarkMode }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <GoSun
        color={darkMode && "white"}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        cursor={"pointer"}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="py-2" style={{ width: "120px" }}>
          <ul className="list-unstyled">
            <li
              onClick={() => setDarkMode(false)}
              className="p-2 d-flex gap-2 dark-toggle"
            >
              <GoSun />
              <Typography className="text-sm">Light</Typography>
            </li>
            <li
              onClick={() => setDarkMode(true)}
              className="p-2 d-flex gap-2 dark-toggle"
            >
              <GoMoon />
              <Typography className="text-sm">Dark</Typography>
            </li>
            <li className="px-2 pt-2 d-flex dark-toggle gap-2">
              <GoCpu />
              <Typography className="text-sm">System</Typography>
            </li>
          </ul>
        </div>
      </Popover>
    </div>
  );
}
