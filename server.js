const { default: axios } = require("axios");
const express = require("express");
let app = express();
let bodyparser = require('body-parser')
app.use(bodyparser.json())

const dotenv = require("dotenv")
dotenv.config()

const router = require("./Router/router");
app.use(router);


let PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is looking for ${PORT}`);
});
