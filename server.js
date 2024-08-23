const { default: axios } = require("axios");
const express = require("express");
let app = express();

let bodyparser = require('body-parser')
app.use(bodyparser.json())

const router = require("./Router/router");
app.use(router);


let PORT = 4000;

app.listen(PORT, () => {
  console.log(`server is looking for ${PORT}`);
});
