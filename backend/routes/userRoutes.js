const express = require("express");
const {
  registerUser,
  loginUser,
  verifyOTP,
} = require("../controllers/userController");
const authHandler = require("../middlewares/authMiddleware");

const userRouter = express.Router();

userRouter.post("/register-user", registerUser);
userRouter.post("/login-user", loginUser);
userRouter.post("/verify-otp/", authHandler, verifyOTP);

module.exports = userRouter;
