const nodemailer = require("nodemailer");
const schedule = require("node-schedule");
const path = require("path");
const sendMail = async (mail, result) => {

 
  var transtorter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.userMail,
      pass: process.env.passMail,
    },
  });

  result = JSON.stringify(result);

  var mailOptions = {
    from: process.env.userMail,
    to: "shabnambegum227@gmail.com" || mail,
    subject: "sending mail using node js",
    text: `this is your fine amount \n ${result}`,
  };

  let passMail = await transtorter.sendMail(mailOptions);
  console.log("passMail", passMail);
  if (passMail) return "Email sent successfully";
  else return false;
};

const managementMail = async (mail, result) => {

  var transtorter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.userMail,
      pass: process.env.passMail,
    },
  });

  result = JSON.stringify(result);

  var mailOptions = {
    from: process.env.userMail,
    to: mail,
    subject: "sending mail using node js",
    text: result,
  };

  let passMail = await transtorter.sendMail(mailOptions);

  if (passMail) {
    return {
      statusCode: 400,
      status: true,
      message: "message",
      data: {},
    };
  }

  //    //schedule.scheduleJob("0 15 32 *", async () => {
  //     let passMail = await transtorter.sendMail(mailOptions);
  //     if (passMail) return "Email sent successfully";
  //     else return false;
  // //  })
};

const pendingStudent = async (mail, result) => {
  console.log("mail", mail);
  var transtorter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shabnambegum1511@gmail.com",
      pass: "mzos kxfh gxkd nqln",
    },
  });

  result = JSON.stringify(result);

  var mailOptions = {
    from: "shabnambegum1511@gmail.com",
    to: mail,
    subject: "sending mail using node js",
    text: `Requesting to pay fees \n The amount of rupees${result} only/`,
    attachments: {
      filename: "feestructure.pdf",
      content: "fee structure",
      path: ".",
      //  contentType: 'feestructure/pdf'
    },
  };

  let passMail = await transtorter.sendMail(mailOptions);
  if (passMail) return "Email sent successfully";
  else return false;
};

module.exports = { sendMail, managementMail, pendingStudent };
