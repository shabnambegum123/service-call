const { param } = require("../Router/router");
const { sendMail,managementMail,forgetMail,PDFmail } = require("../mail")
// send mail for student their fees details
const createPostService = async (param, value) => {
  try {
    const mailSend = await sendMail(param, value);
    
    console.log("mailSend" , mailSend)
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
}

// send mail for management all the student createdn everyday 6pm 
const managementMailService = async (param, value) => {
  try {
    const mailSend = await managementMail(param, value);
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
        statusCode:400,
        status:false,
        message: "not found",
        data: {},
      };
    }
  } catch (error) {
    return {
      statusCode:400,
      status:false,
      message: error.message,
      data: {},
    };
  }
};
const pendingMailService = async (param,value) =>{
  try {
    const mailSend = await managementMail (param, value);
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
}

 const forgetPasswordService = async (param,value)=>{
  try {
    const mailSend = await forgetMail (param, value);
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
 }

 const pdfMailService = async (param, value) => {
  try {
    const mailSend = await PDFmail(param, value);
    
    console.log("mailSend" , mailSend)
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
}

module.exports = { createPostService,managementMailService,pendingMailService,forgetPasswordService,pdfMailService };
