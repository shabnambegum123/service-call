const { default: axios } = require("axios");

const {
  createPostService,
  managementMailService,
  pendingMailService,
  forgetPasswordService,
  pdfMailService
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
  let params = req.body.find;
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
  let EmailId = req.body.find.EmailId ;
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
  pdfMail
};
