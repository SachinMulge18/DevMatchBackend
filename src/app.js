const express = require("express");

const app = express();

app.use((req, res) => {
  res.send("lskjdfsdjflj"); 
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
