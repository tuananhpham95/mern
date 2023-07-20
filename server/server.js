const userRoutes = require("./routes/userRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

//db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

//mw
app.use(express.json());
express.urlencoded({ extended: true });
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
app.use(cors());
//routes
app.use(userRoutes);
app.use(uploadRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("server is running");
});
