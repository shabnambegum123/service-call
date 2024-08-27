const { param } = require("../Router/router");
const { sendMail,managementMail } = require("../mail")
// send mail for student their fees details
const createPostService = async (param,value) => {
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
}
// send mail for management all the student createdn everyday 6pm 
const managementMailService = async (param,value) =>{
  try {
    const mailSend = await managementMail (param, value);
    console.log("mailSend" , param)
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

}
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
 


module.exports = { createPostService,managementMailService,pendingMailService };
