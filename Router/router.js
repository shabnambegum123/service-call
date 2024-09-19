const router = require("express").Router();
const {verifyToken,verifyRole} = require("../middware/Authentication")
const {
  createPost,
  getPosts,
  listPosts,
  updatePost,
  deletePost,
  pendingstudent,
  management,
  forgetPassword,
  pdfMail,
  notificationTable,
  notificationTableUpdate,
  notificationTableGet,
  notificationTableDelete,
  fetchingData,
  sendMaiData

} = require("../controller/controller");
const { sendEmail } = require("../CronModule");

router.post("/send/Mail", createPost);
router.post("/create/Mail", sendMaiData);
router.post("/mail/send",pendingstudent)
router.put("/update/post", getPosts);
router.get("/list/post", listPosts);
router.get("/get/post", updatePost);
router.delete("/delete/post", deletePost);
router.post("/management/send",management)
router.post("/forgetPassword/send",forgetPassword)
router.post("/pdf/url",pdfMail)
router.post("/create/notification",notificationTable)
router.put("/update/notification",[verifyToken,verifyRole(["Staff","Student"])] , notificationTableUpdate)
router.get("/get/notification",notificationTableGet)
router.delete("/delete/notification",notificationTableDelete)
router.get("/fetch/data",fetchingData)
module.exports = router;
