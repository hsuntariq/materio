const handler = require("express-async-handler");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const authHandler = handler(async (req, res, next) => {
  let token;

  // check if authorization

  if (
    req.headers.authorization &&
    // check if authorization starts with Bearer word
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // split the token and get the 1st index
      token = req.headers.authorization.split(" ")[1];
      //   decode the information
      let decode = jwt.verify(token, process.env.JWT_SECRET);
      // find the user from the decoded information
      req.user = await userModel.findById(decode.id);
      //   process the next request
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Invalid token");
    }
  } else {
    res.status(401);
    throw new Error("No token found");
  }
});

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2QxN2JiODVhMmZlNjRhMzFiZmM5OCIsImlhdCI6MTczNjk0MDQxMiwiZXhwIjoxNzM4MjM2NDEyfQ.5AjLZirnfWAvIvA_D5kcgBpHlomXTnuDcT0LYLmdI7g

module.exports = authHandler;
