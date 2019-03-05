const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI,
  err => {
    if (!err) {
      console.log("MongoDb connection succeeded!");
    } else {
      console.log(
        "Error in MongoDB connection : " + JSON.stringify(err, undefined, 2)
      );
    }
  },
  { useNewUrlParser: true }
);

require("./user.model");
