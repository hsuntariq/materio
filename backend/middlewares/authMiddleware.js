const handler = require("express-async-handler");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const authMiddleware = handler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      let decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
    } catch (error) {}
  } else {
    res.status(401);
    throw new Error("Token not found");
  }
});

module.exports = authMiddleware;

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2QxN2JiODVhMmZlNjRhMzFiZmM5OCIsImlhdCI6MTczNjg1OTg0MSwiZXhwIjoxNzM4MTU1ODQxfQ.WvA3RkVgveL5sfDcrJTpjDaHG6MOw1b2kOXH6U36ee8
