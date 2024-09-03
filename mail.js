const nodemailer = require("nodemailer");
const cron = require('node-cron');
const { template } = require("./htmlTemplate");
const path = require("path");
const { jsPDF } = require("jspdf");
const sendMail = async (mail, result) => {
  var transtorter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "galaxy08102001@gmail.com" ?? process.env.userMail,
      pass: "qksk poco lxlr kggz" ?? process.env.passMail,
    },
  });

  let data = await template(result);
  data = JSON.stringify(data);

  var mailOptions = {
    from: process.env.userMail,
    to: "shabnambegum227@gmail.com" || mail,
    subject: "sending mail using node js",
    text: data,
    // attachments: [
    //   {
    //     filename: "feestructure.pdf",
    //     path: path.join(__dirname, "feestructure.pdf"),
    //     contentType: "application/pdf",
    //   },
    // ],
  };

  let passMail = await transtorter.sendMail(mailOptions);
  console.log("passMail", passMail);
  if (passMail) return "Email sent successfully";
  else return false;
};

const managementMail = async (mail, result) => {
  var transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.userMail,
      pass: process.env.passMail,
    },
  });

 // result = JSON.stringify(result);

  var mailOptions = {
    from: process.env.userMail,
    to: mail,
    subject: "sending mail using node js",
    text: result,
  };
  try {
    await transporter.sendMail(mailOptions)
    console.log("Email sent successfully")
   
  cron.schedule("0 18 * * *",async () => {
     console.log("Sending data every day at 6 PM") 
    await sendMail();
  });
}
catch (error) {
     console.log(error)
}
};

const pendingStudent = async (mail, result) => {
  console.log("mail", mail);
  var transtorter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "galaxy08102001@gmail.com",
      pass: "qksk poco lxlr kggz",
    },
  });

  result = JSON.stringify(result);

  var mailOptions = {
    from: "galaxy08102001@gmail.com",
    to: mail,
    subject: "sending mail using node js",
    text: `Requesting to pay fees \n The amount of rupees${result} only/`,
  };

  let passMail = await transtorter.sendMail(mailOptions);
  if (passMail) return "Email sent successfully";
  else return false;
};

const forgetMail = async (mail, result) => {
  console.log(mail, result);
  var transtorter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.userMail,
      pass: process.env.passMail,
    },
  });

  // result = JSON.stringify(result);

  var mailOptions = {
    from: process.env.userMail,
    to: mail,
    subject: "sending mail using node js",
    text: result,
  };

  let passMail = await transtorter.sendMail(mailOptions);
  if (passMail) return "Email sent successfully";
  else return false;
};


const PDFmail = async (mail, result) => {
 
  var transtorter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "galaxy08102001@gmail.com" ?? process.env.userMail,
      pass: "qksk poco lxlr kggz" ?? process.env.passMail,
    },
  });

  result = JSON.stringify(result);


  const doc = new jsPDF();
  doc.text(result, 10, 10);
  doc.save("ID.pdf")

  var mailOptions = {
    from: process.env.userMail,
    to: "shabnambegum227@gmail.com" || mail,
    subject: "sending mail using node js",
    
    attachments: [
      {
        filename: "ID.pdf",
        path: path.join(__dirname, "a4.pdf"),
        contentType: "application/pdf",
      },
    ],
  };

  let passMail = await transtorter.sendMail(mailOptions);
  console.log("passMail", passMail);
  if (passMail) return "Email sent successfully";
  else return false;
};

module.exports = { sendMail, managementMail, pendingStudent, forgetMail,PDFmail };
