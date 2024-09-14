const nodemailer = require("nodemailer");
const cron = require("node-cron");
const { template } = require("./htmlTemplate");
const path = require("path");
const fs = require('fs')
const sendMail = async (mail, result) => {
 
   
  var mailOptions = {
    from: process.env.userMail,
    to: "shabnambegum227@gmail.com" || mail,
    subject: "sending mail using node js",
    text: "hello",
    // attachments: [
    //   {
    //     filename: "businesscard.pdf",
    //     path: path.join(__dirname + "/businesscard.pdf"),
    //     contentType: "application/pdf",
    //   },
    // ],
  }
cron.schedule("3 16 * * *", () => {
  var transporter =  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "galaxy08102001@gmail.com" ?? process.env.userMail,
      pass: "qksk poco lxlr kggz" ?? process.env.passMail,
    },
  });
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("error:", error.message);
    } else {
      console.log("Email Send:" + info.response);
    }
  })
})

}
module.exports = {sendMail}


