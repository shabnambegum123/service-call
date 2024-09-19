
// // const { generateTextContent, pdfTextContent } = require("./template");
// const { transporter } = require("./Email");
// const path = require("path");
// const fs = require('fs');
// const {emailTemplate} = require("./template")



// const mailoptions = async (mail, result, Attachment) => {
//   // result = JSON.parse(result);

//   var mailOptions = {
//     from: process.env.userMail,
//     to: "shabnambegum227@gmail.com" || mail,
//     subject: "Sending student profile",
//     html: emailTemplate(result),
//   };

//   try {
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log("error:", error.message);
//       } else {
//         console.log("Email Send:" + info.response);
//       }
//     });
//   } catch (error) {
//     console.error("Error sending email:", error.message);
//   }
// };

// const pdfOPtion = async (result, mail) => {

//   var mailOptions = {
//     from: process.env.userMail,
//     to: "shabnambegum227@gmail.com" || mail,
//     subject: "Id card Pdf",
//     html: result,
//     attachments: [
//       {
//         filename: "pdf.hbs",
//         path: path.join(__dirname + "/service/pdf.hbs"),
//         contentType: "application/pdf",
//       },
//     ],
//   }

//   try {
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log("error:", error.message);
//       } else {
//         console.log("Email Send:" + info.response);
//       }
//     });
//   } catch (error) {
//     console.error("Error sending email:", error.message);
//   }
// };

// const managementOPtion = async ( result) => {

//   // result = JSON.stringify(result)
   
//   var mailOptions = {
//     from: process.env.userMail,
//     to: "shabnambegum227@gmail.com" ,
//     subject: "Students Profile",
//     body: studentDetailsTemplate(result),
//   };

//   const send = await transporter(mailOptions)

//   try {
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log("error:", error.message);
//       } else {
//         console.log("Email Send:" + info.response);
//       }
//     });
//   } catch (error) {
//     console.error("Error sending email:", error.message);
//   }

// }

// module.exports = { mailoptions, pdfOPtion, managementOPtion };





const sendEmail = async (mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

const mailOptions = async (mail, result) => {
  const options = {
    from: process.env.userMail,
    to: mail || "shabnambegum227@gmail.com",
    subject: "Sending student profile",
    html: emailTemplate(result),
  };
  await sendEmail(options);
};

const pdfOption = async (result, mail) => {
  const options = {
    from: process.env.userMail,
    to: mail || "shabnambegum227@gmail.com",
    subject: "Id card Pdf",
    html: result,
    attachments: [
      {
        filename: "pdf.hbs",
        path: path.join(__dirname, "/service/pdf.hbs"),
        contentType: "application/pdf",
      },
    ],
  };
  await sendEmail(options);
};

const managementOption = async (result) => {
  const options = {
    from: process.env.userMail,
    to: "shabnambegum227@gmail.com",
    subject: "Students Profile",
    html: result, 
  };
  await sendEmail(options);
};

module.exports = { mailOptions, pdfOption, managementOption };
