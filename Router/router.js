const router = require("express").Router();
const {
  createPost,
  getPosts,
  listPosts,
  updatePost,
  deletePost,
  pendingstudent,
  management,
  forgetPassword,
  pdfMail
} = require("../controller/controller");

router.post("/send/Mail", createPost);
router.post("/mail/send",pendingstudent)
router.put("/update/post", getPosts);
router.get("/list/post", listPosts);
router.get("/get/post", updatePost);
router.delete("/delete/post", deletePost);
router.post("/management/send",management)
router.post("/forgetPassword/send",forgetPassword)
router.post("/pdf/url",pdfMail)
module.exports = router;
