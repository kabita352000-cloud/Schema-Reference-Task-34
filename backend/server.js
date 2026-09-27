const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// const userRoutes = require("./src/routes/user.routes");
// const postRoutes = require("./src/routes/post,routes");


const routes = require("./src/routes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);


app.get("/", (req, res) => {
  res.send("User API is running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(9000, () => {
      console.log("Server running on http://localhost:9000");
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });