const { default: axios } = require("axios");
const {sendMail,managementMail,pendingStudent} = require('../mail')
const createPost = async (req, res) => {
  try {
    let params = await req.body.result;
    let EmailId = await req.body.generatetoken
    console.log("ebvjeb", params);
    console.log(EmailId)
   const mailSend = await sendMail(EmailId,params)
    if(mailSend){
      res.send('Email sent successfully')
    }
    else{
      res.send('error')
    }
  } catch (error) {
    console.error('Error', error);
  }
};

const pendingstudent = async (req,res) =>{
  try {
    let params = await req.body.find;
    let data = req.body.result
     const mailSend = await pendingStudent(params,data)
    if(mailSend){
      res.send('Email sent successfully')
    }
    else{
      res.send('error')
    }
  } catch (error) {
    console.error('Error', error);
  }

}

const management = async (req,res) =>{
  try {
    let params = 'shabnambegum227@gmail.com';
    let data = req.body.find
 const mailSend = await managementMail(params,data)
    if(mailSend){
      res.send('Email sent successfully')
    }
    else{
      res.send('error')
    }
  } catch (error) {
    console.error('Error', error);
  }
}

const getPosts = async () => {
  try {
    const result = await axios.get(url);
    console.log("Posts", result.data);
  } catch (error) {
    console.error("Error", error);
  }
};

const listPosts = async (postId) => {
  try {
    const result = await axios.get(`${url}/${postId}`);
    console.log("Posts", result.data);
  } catch (error) {
    console.error("Error", error);
  }
};

const updatePost = async (postId) => {
  try {
    const result = await axios.put(`${url}/${postId}`, {
      userId: 1,
      Name: "shabnam",
      age: 20,
    });
    console.log("updated", result.data);
  } catch (error) {
    console.error("Error", error);
  }
};

const deletePost = async (postId) => {
  try {
    const result = await axios.delete(`${url}/${postId}`);
    console.log("deleted", result.status);
  } catch (error) {
    console.error("Error", error);
  }
};
module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  listPosts,
  pendingstudent,
  management
};
