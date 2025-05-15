const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose.connect(
    "mongodb+srv://sachinmulge98:iZTpybuD7rrSkSBf@devmatchdb.hjej6aq.mongodb.net/devmatchdb"
  );
};

module.exports = connectDb;
