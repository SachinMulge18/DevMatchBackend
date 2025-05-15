const express = require("express");
const app = express();
const connnectDb = require("./config/database");
const { adminAuth } = require("./middleware/auth");

connnectDb()
  .then(() => {
    console.log("db connected ....");
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
  