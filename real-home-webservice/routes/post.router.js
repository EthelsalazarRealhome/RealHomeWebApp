const express = require("express");
const router = express.Router();

const { createPostValidator, idInParamsValidator } = require("../validators/post.validators");
const validateFields = require("../validators/index.middleware");

const postController = require("../controllers/post.controller");

//get routes
router.get(
  "/",
  postController.findAll
);

router.get(
  "/hidden",
  postController.findHidden
);

router.get(
  "/:identifier",
  idInParamsValidator,
  validateFields,
  postController.findOneById
);

//post routes
router.post(
  ["/", "/:identifier"],
  createPostValidator,
  validateFields,
  postController.save
);

//patch routes
router.patch(
  "/visibility/:identifier",
  idInParamsValidator,
  validateFields,
  postController.toggleHidden
);

//delete routes
router.delete(
  "/:identifier",
  idInParamsValidator,
  validateFields,
  postController.deleteById
);

module.exports = router;