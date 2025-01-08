const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/register-user", registerUser);
userRouter.post("/login-user", loginUser);

module.exports = userRouter;
