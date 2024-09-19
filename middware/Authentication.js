const axios = require("axios");
const { axiosFunction } = require("../axios");
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token = req.headers.authorization;
  var Token = jwt.verify(token, process.env.secretKey);

  console.log(Token);
  const getData = await axiosFunction(Token);
  if (getData.data.status == 200) {
    next();
  } else {
    return res.json({
      statusCode: 400,
      status: false,
      error: "Token Invalid",
    });
  }
};

const verifyRole = (role = []) =>
  async function (req, res, next) {
    try {
      var token = req.headers.authorization;

      var Token = jwt.verify(token, process.env.secretKey);

      if (role.includes(Token.Role)) {
        next();
      } else {
        res.status(400).json({
          status: 400,
          message: "error",
          data: {},
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
        data: {},
      });
    }
  };

module.exports = { verifyRole, verifyToken };
