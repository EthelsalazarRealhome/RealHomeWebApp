const express = require("express");
const router = express.Router();

const postRouter = require("./post.router");

router.use("/post", postRouter);

module.exports = router;