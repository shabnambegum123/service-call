const { param } = require("../Router/router");
const { sendMail } = require("../mail");
var fs = require("fs");
var pdf = require("html-pdf");
// send mail for student their fees details
const notificationTable = require("../DataBase/Modal/NotificationTable");
const { Json } = require("sequelize/lib/utils");
const createPostService = async (param, value) => {
  try {
    const mailSend = await sendMail(param, value);

    console.log("mailSend", mailSend);
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
const managementMailService = async (param, value) => {
  try {
    const mailSend = await sendMail(param, value);
    console.log("mailSend", param);
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
  try {
    
    var options = { format: "A4" };

     pdf
      .create(value, options)
      .toFile("./businesscard.pdf", function (err, res) {
        if (err) return console.log(err);
        console.log(res);
      });

    const mailSend = await sendMail("shabnambegum227@gmail.com");

  
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

const notificationUpdateService = async (params) => {
  try {
    let value = {
      Extra: params,
      SubjectName: "Update studentProfile",
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
};
