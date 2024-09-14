
const express = require("express");
let app = express();
let bodyparser = require("body-parser");
app.use(bodyparser.json());

const dotenv = require("dotenv");
dotenv.config();

const router = require("./Router/router");
app.use(router);

require("./DataBase/Modal/index");
let PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is looking for ${PORT}`);
});
