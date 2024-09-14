const { default: axios } = require("axios");

const {
  createPostService,
  managementMailService,
  pendingMailService,
  forgetPasswordService,
  pdfMailService,
  notificationTableService,
  notificationUpdateService,
  notificationGetService,
  notificationTableDeleteService,
  fetchingDataService
} = require("../service/service");
const createPost = async (req, res) => {
  let params = req.body.find;
   let EmailId =  req.body.EmailId;
  const result = await createPostService(EmailId, params);
  console.log("result" , result)
  if (result.status) {
    res.status(result.statusCode).json({
      status: result.statusCode,
      message: result.message,
      data: result.data,
    });
  } else {
    res.status(result.statusCode).json({
      status: result.statusCode,
      message: result.message,
      data: result.data,
    });
  }
};

const pendingstudent = async (req, res) => {
  console.log("wdn qwef" , req.body.find)
  let params = req.body.find.toString();
  let EmailId = "kishore.t@doodleblue.in";
  console.log(params);
  const result = await pendingMailService(EmailId, params);
  if (result.status) {
    res.status(result.statusCode).json({
      status: result.statusCode,
      message: result.message,
      data: result.data,
    });
  } else {
    res.status(result.statusCode).json({
      status: result.statusCode,
      message: result.message,
      data: result.data,
    });
  }
};

const management = async (req, res) => {
  let params = req.body.find;
  let EmailId = req.body.EmailId ;
  const result = await managementMailService(EmailId, params);
  if (result.status) {
    res.status(result.statusCode).json({
      status: result.statusCode,
      message: result.message,
      data: result.data,
    });
  } else {
    res.status(result.statusCode).json({
      status: result.statusCode,
      message: result.message,
      data: result.data,
    });
  }
}

const forgetPassword = async (req,res) =>{
  
  let params = req.body.find;
  let EmailId = req.body.EmailId ;
  
  const result = await forgetPasswordService (EmailId, params);
  if (result.status) {
    res.status(result.statusCode).json({
      status: result.statusCode,
      message: result.message,
      data: result.data,
    });
  } else {
    res.status(result.statusCode).json({
      status: result.statusCode,
      message: result.message,
      data: result.data,
    });
  }
}


const pdfMail = async (req,res) =>{
  
  let params = req.body.find;
  let EmailId = req.body.EmailId ;
    console.log(params,EmailId)
  const result = await pdfMailService (EmailId, params);
  if (result.status) {
    res.status(result.statusCode).json({
      status: result.statusCode,
      message: result.message,
      data: result.data,
    });
  } else {
    res.status(result.statusCode).json({
      status: result.statusCode,
      message: result.message,
      data: result.data,
    });
  }
}

const notificationTable = async (req,res) =>{
 try {
  
  let params = req?.body?.data?.data
 console.log(params)
  const result = await notificationTableService (params);
  if (result.status) {
    res.status(result.statusCode).json({
      status: result.statusCode,
      message: result.message,
      data: result.data,
    });
  } else {
    res.status(result.statusCode).json({
      status: result.statusCode,
      message: result.message,
      data: result.data,
    });
  }
 } catch (error) {
  console.log("aedvqwef" , error)
 }
}

  
  const  notificationTableUpdate = async (req,res) =>{
    try {
  
      let params = req?.body?.data?.data
     
      const result = await notificationUpdateService (params);
      if (result.status) {
        res.status(result.statusCode).json({
          status: result.statusCode,
          message: result.message,
          data: result.data,
        });
      } else {
        res.status(result.statusCode).json({
          status: result.statusCode,
          message: result.message,
          data: result.data,
        });
      }
     } catch (error) {
      console.log("aedvqwef" , error)
     }
  }


  const  notificationTableGet = async (req,res) =>{
    try {
  
      let params = req?.body?.data?.data
       
      const result = await notificationGetService (params);
      if (result.status) {
        res.status(result.statusCode).json({
          status: result.statusCode,
          message: result.message,
          data: result.data,
        });
      } else {
        res.status(result.statusCode).json({
          status: result.statusCode,
          message: result.message,
          data: result.data,
        });
      }
     } catch (error) {
      console.log("aedvqwef" , error)
     }
  }

  const   notificationTableDelete = async (req,res) =>{
    try {
      
      let params = req?.body?.data?.data
     
      const result = await notificationTableDeleteService (params);
      if (result.status) {
        res.status(result.statusCode).json({
          status: result.statusCode,
          message: result.message,
          data: result.data,
        });
      } else {
        res.status(result.statusCode).json({
          status: result.statusCode,
          message: result.message,
          data: result.data,
        });
      }
     } catch (error) {
      console.log("aedvqwef" , error)
     }
  }

  const   fetchingData = async (req,res) =>{
    try {
  
      let params = req?.body?.data?.data
     
      const result = await fetchingDataService (params);
      if (result.status) {
        res.status(result.statusCode).json({
          status: result.statusCode,
          message: result.message,
          data: result.data,
        });
      } else {
        res.status(result.statusCode).json({
          status: result.statusCode,
          message: result.message,
          data: result.data,
        });
      }
     } catch (error) {
      console.log("aedvqwef" , error)
     }
  }
const getPosts = async () => {
  // try {
  //   const result = await axios.get(url);
  //   console.log("Posts", result.data);
  // } catch (error) {
  //   console.error("Error", error);
  // }
};

const listPosts = async (postId) => {
  // try {
  //   const result = await axios.get(`${url}/${postId}`);
  //   console.log("Posts", result.data);
  // } catch (error) {
  //   console.error("Error", error);
  // }
};

const updatePost = async (postId) => {
  // try {
  //   const result = await axios.put(`${url}/${postId}`, {
  //     userId: 1,
  //     Name: "shabnam",
  //     age: 20,
  //   });
  //   console.log("updated", result.data);
  // } catch (error) {
  //   console.error("Error", error);
  // }
};

const deletePost = async (postId) => {
  // try {
  //   const result = await axios.delete(`${url}/${postId}`);
  //   console.log("deleted", result.status);
  // } catch (error) {
  //   console.error("Error", error);
  // }
};
module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  listPosts,
  pendingstudent,
  management,
  forgetPassword,
  pdfMail,
  notificationTable,
  notificationTableUpdate,
  notificationTableGet,
  notificationTableDelete,
  fetchingData
};
