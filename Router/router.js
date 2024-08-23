const router = require("express").Router();
const {
  createPost,
  getPosts,
  listPosts,
  updatePost,
  deletePost,
  pendingstudent,
  management
} = require("../controller/controller");

router.post("/send/Mail", createPost);
router.post("/mail/send",pendingstudent)
router.put("/update/post", getPosts);
router.get("/list/post", listPosts);
router.get("/get/post", updatePost);
router.delete("/delete/post", deletePost);
router.post("/management/send",management)
module.exports = router;
