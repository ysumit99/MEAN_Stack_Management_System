require("./config/config");
require("./models/db");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const rtsIndex = require("./routes/index.router");

var app = express();

//middleware
app.use(bodyParser.json()); //to parse json data in this nodejs app
app.use(cors()); //communication between front end and back end on different ports
app.use("/api", rtsIndex);
//start server
app.listen(process.env.PORT, () =>
  console.log(`Server started  at port : ${process.env.PORT}`)
);
