const express = require("express");
const errorHandler = require("./middlewares/errorMiddleware");
const connectDB = require("./config/connectDB");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("colors");

app.use(cors());

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// user routes

app.use("/api/users/", require("./routes/userRoutes"));

// product routes

app.use("/api/products/", require("./routes/productRoutes"));

app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server started on port:${process.env.PORT.yellow}`)
);
