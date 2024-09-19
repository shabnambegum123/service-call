const express = require("express");
let app = express();
let bodyparser = require("body-parser");
app.use(bodyparser.json());

const dotenv = require("dotenv");
dotenv.config();

const router = require("./Router/router");
app.use(router);

const exphbs = require("express-handlebars");

app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.set("views", "./views");

require("./CronModule");

require("./DataBase/Modal/index");
let PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is looking for ${PORT}`);
});
