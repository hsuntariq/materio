import { Button, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

import axios from "axios";

import { Link } from "react-router-dom";
const RegForm = () => {
  const [showPass, setShowPass] = useState(false);

  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
  });

  //   destructure

  const { username, email, password } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = async () => {
    const response = await axios.post(
      "http://localhost:3001/api/users/register-user",
      { username, email, password }
    );

    console.log(response);
  };

  return (
    <>
      <form className="w-100 my-2">
        <TextField
          className="w-100 my-2"
          id="Username"
          onChange={handleChange}
          value={username}
          label="Username"
          variant="outlined"
          name="username"
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
        <TextField
          className="w-100 my-2"
          name="email"
          onChange={handleChange}
          value={email}
          id="Email"
          label="Email"
          variant="outlined"
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
        <div className="position-relative">
          <TextField
            name="password"
            onChange={handleChange}
            value={password}
            className="w-100 my-2"
            id="Password"
            label="Password"
            type={`${showPass ? "text" : "password"}`}
            variant="outlined"
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
          {showPass ? (
            <FaEyeSlash
              onClick={() => setShowPass(false)}
              size={20}
              className="position-absolute"
              style={{
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
              }}
              cursor={"pointer"}
            />
          ) : (
            <FaEye
              onClick={() => setShowPass(true)}
              size={20}
              className="position-absolute"
              style={{
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
              }}
              cursor={"pointer"}
            />
          )}
        </div>

        <Button
          type="button"
          onClick={handleRegistration}
          className="w-100 my-2 bg-purple text-white"
        >
          Sign Up
        </Button>

        <p className="text-gray text-center my-2">
          Already have an account ?{" "}
          <Link className="text-purple text-decoration-none">
            Sign in instead
          </Link>
        </p>

        <div className="d-flex gap-3 align-items-center">
          <hr
            style={{
              width: "100%",
              background: "gray",
              border: "0",
              height: "1px",
            }}
          />
          <p className="text-gray m-0">or</p>
          <hr
            style={{
              width: "100%",
              background: "gray",
              border: "0",
              height: "1px",
            }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <IconButton>
            <RiFacebookFill size={20} color="#4267B2" />
          </IconButton>
          <IconButton>
            <FaTwitter size={20} color="#1DA1F2" />
          </IconButton>
          <IconButton>
            <FaGithub size={20} color="black" />
          </IconButton>
          <IconButton>
            <FaGoogle size={20} color="#DB4437" />
          </IconButton>
        </div>
      </form>
    </>
  );
};

export default RegForm;
