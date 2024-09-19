const { param } = require("../Router/router");
const { mailoptions, pdfOPtion, managementOPtion } = require("../mail");
const handlebars = require("handlebars");
const jwt = require("jsonwebtoken");
var fs = require("fs");
var pdf = require("html-pdf");
const { generateHTMLContent } = require("../pdf");
const XLSX = require("xlsx");
// const {managementTemplate} = require("../management")
const path = require("path");
// send mail for student their fees details
const notificationTable = require("../DataBase/Modal/NotificationTable");
const { Json } = require("sequelize/lib/utils");
const { sendEmail } = require("../CronModule");

const createPostService = async (param, value) => {
  try {
    const mailSend = await mailoptions(param, value);

    if (mailSend) {
      return {
        statusCode: 200,
        status: true,
        message: "sended",
        data: {},
      };
    } else {
      return {
        statusCode: 200,
        status: false,
        message: "not found",
        data: {},
      };
    }
  } catch (error) {
    console.error("Error", error);
  }
};


const sendMailService = async (param, value) => {
  try {
    const mailSend = await mailoptions(param, value);

    if (mailSend) {
      return {
        statusCode: 200,
        status: true,
        message: "sended",
        data: {},
      };
    } else {
      return {
        statusCode: 200,
        status: false,
        message: "not found",
        data: {},
      };
    }
  } catch (error) {
    console.error("Error", error);
  }
};


// send mail for management all the student createdn everyday 6pm
const managementMailService = async (result, Email) => {
  try {
    const mailSend = await sendEmail(result);
 
    if (mailSend) {
      return {
        statusCode: 200,
        status: true,
        message: "sended",
        data: {},
      };
    } else {
      return {
        statusCode: 400,
        status: false,
        message: "not found",
        data: {},
      };
    }
  } catch (error) {
    return {
      statusCode: 400,
      status: false,
      message: error.message,
      data: {},
    };
  }
};
const pendingMailService = async (param, value) => {
  try {
    const mailSend = await pdfOPtion(param, value);
    if (mailSend) {
      return {
        statusCode: 200,
        status: true,
        message: "sended",
        data: {},
      };
    } else {
      return {
        status: 400,
        message: "not found",
        data: {},
      };
    }
  } catch (error) {
    console.error("Error", error);
  }

  // try {
  //   let params = await req.body.find;
  //   let data = req.body.result;
  //   const mailSend = await pendingStudent(params, data);
  //   if (mailSend) {
  //     res.send("Email sent successfully");
  //   } else {
  //     res.send("error");
  //   }
  // } catch (error) {
  //   console.error("Error", error);
  // }
};

const forgetPasswordService = async (param, value) => {
  try {
    const mailSend = await sendMail(param, value);
    if (mailSend) {
      return {
        statusCode: 200,
        status: true,
        message: "sended",
        data: {},
      };
    } else {
      return {
        statusCode: 400,
        status: false,
        message: "not found",
        data: {},
      };
    }
  } catch (error) {
    console.error("Error", error);
  }
};

const pdfMailService = async (param, value) => {
  // const templatePath = path.join(__dirname, "pdf.hbs");

  // fs.readFile(templatePath, "utf8", (err, source) => {
  //   if (err) {
  //     console.error("Error reading template file:", err);
  //     return;
  //   }

  // const template = Handlebars.compile(source);

  // var result = template(value);

  // });
  // const mailSend =  pdfOPtion(result);

  //   if (mailSend) {
  //     return {
  //       statusCode: 200,
  //       status: true,
  //       message: "Email sent successfully",
  //       data: {},
  //     };
  //   } else {
  //     return {
  //       statusCode: 200,
  //       status: false,
  //       message: "Email not sent",
  //       data: {},
  //     };
  //   }

 



app.engine('hbs', exphbs());
app.set('view engine', 'hbs');

// app.get('/generate-pdf', (req, res) => {
//     const profileData = {
//         profileID: '12345',
//         name: 'John Doe',
//         designation: 'Software Developer',
//         currentYear: '2024'
//     };

    

const options = {
  format: 'A4'
};

pdf.create(html, options).toFile('./profile.pdf', (err, result) => {
  if (err) {
      return res.status(500).send('Error creating PDF');
  }
})


    


  try {
    const templatePath = path.join(__dirname, 'pdf.hbs');

    // Use a Promise to handle the async file read
    const source = await new Promise((resolve, reject) => {
      fs.readFile(templatePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading template file:", err);
          return reject(err);
        }
        resolve(data);
      });
    });

    const template = handlebars.compile(source);
    const result = template(value);

    const mailSend = await pdfOPtion(result);

    if (mailSend) {
      return {
        statusCode: 200,
        status: true,
        message: "Email sent successfully",
        data: {},
      };
    } else {
      return {
        statusCode: 200,
        status: false,
        message: "Email not sent",
        data: {},
      };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      status: false,
      message: "Internal server error",
      data: {},
    };
  }
};
const notificationTableService = async (params) => {
  try {
    let value = {
      Extra: JSON.parse(params),
      SubjectName: "created studentProfile",
    };

    let createNotification = await notificationTable.create(value);
    console.log(createNotification);
    if (createNotification) {
      return {
        statusCode: 200,
        status: true,
        message: "Notification",
        data: {},
      };
    } else {
      return {
        statusCode: 400,
        status: true,
        message: "error",
        data: {},
      };
    }
  } catch (error) {
    return {
      statusCode: 400,
      status: false,
      message: error.message,
      data: {},
    };
  }
};

const notificationUpdateService = async (value) => {
  try {
    let ID = value.ID;

    ID = Number(ID);

    let result = await notificationTable.findOne({
      where: { ID: ID },
      raw: true,
    });

    let updateNotification = await notificationTable.update(
      { Extra: value.Extra },
      { where: { ID: ID } }
    );

    console.log("asdvqwe", updateNotification);

    if (updateNotification) {
      return {
        statusCode: 200,
        status: true,
        message: "Notification",
        data: {},
      };
    } else {
      return {
        statusCode: 400,
        status: true,
        message: "error",
        data: {},
      };
    }
  } catch (error) {
    return {
      statusCode: 400,
      status: false,
      message: error.message,
      data: {},
    };
  }
};

const notificationGetService = async (params) => {
  try {
    // let value = {
    //   Extra: params,
    //   SubjectName: "get studentProfile",
    // };

    let createNotification = await notificationTable.findAll({ raw: true });

    if (createNotification) {
      return {
        statusCode: 200,
        status: true,
        message: "Notification",
        data: createNotification,
      };
    } else {
      return {
        statusCode: 400,
        status: true,
        message: "error",
        data: {},
      };
    }
  } catch (error) {
    return {
      statusCode: 400,
      status: false,
      message: error.message,
      data: {},
    };
  }
};

const notificationTableDeleteService = async (params) => {
  try {
    // let value = {
    //   Extra: params,
    //   SubjectName: "deleted studentProfile",
    // };
    let ID = +params.ID;

    var result = await notificationTable.update(
      { is_deleted: "true" },
      {
        where: { ID: ID },
      }
    );

    if (result) {
      return {
        statusCode: 200,
        status: true,
        message: "Notification",
        data: {},
      };
    } else {
      return {
        statusCode: 400,
        status: true,
        message: "error",
        data: {},
      };
    }
  } catch (error) {
    return {
      statusCode: 400,
      status: false,
      message: error.message,
      data: {},
    };
  }
};

const fetchingDataService = async (params) => {
  try {
    // let value = {
    //   Extra :params,
    //   SubjectName:"deleted studentProfile"
    // }
    let createNotification = await notificationTable.findOne({
      where: { ID: params.ID },
      raw: true,
    });

    if (createNotification) {
      return {
        statusCode: 200,
        status: true,
        message: "Notification",
        data: createNotification,
      };
    } else {
      return {
        statusCode: 400,
        status: true,
        message: "error",
        data: {},
      };
    }
  } catch (error) {
    return {
      statusCode: 400,
      status: false,
      message: error.message,
      data: {},
    };
  }
};
module.exports = {
  createPostService,
  managementMailService,
  pendingMailService,
  forgetPasswordService,
  pdfMailService,
  notificationTableService,
  notificationUpdateService,
  notificationGetService,
  notificationTableDeleteService,
  fetchingDataService,
  sendMailService 
};
// const options = { format: "A4" };

// const pdfPath = path.join(__dirname, "businesscard.pdf");

// pdf
//   .create(generateHTMLContent(value), options)
//   .toFile(pdfPath, (err, res) => {
//     if (err) {
//       console.error("Error creating PDF:", err);
//       throw err;
//     }
//     console.log("PDF created:", res);
//   });
