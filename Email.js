
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "galaxy08102001@gmail.com" ?? process.env.userMail,
    pass: "qksk poco lxlr kggz" ?? process.env.passMail,
  },

});





module.exports = { transporter };
