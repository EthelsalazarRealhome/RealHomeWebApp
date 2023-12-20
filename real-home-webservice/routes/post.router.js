const express = require("express");
const router = express.Router();

const { createPostValidator, idInParamsValidator } = require("../validators/post.validators");
const validateFields = require("../validators/index.middleware");
const { authentication, authorization } = require("../middlewares/auth.middleware");
const ROLES = require("../data/roles.json");

const postController = require("../controllers/post.controller");

//get routes
router.get(
  "/",
  postController.findAll
);

router.get(
  "/hidden",
  authentication,
  authorization(ROLES.ADMIN),
  postController.findHidden
);

router.get("/own",
  authentication,
  authorization(ROLES.ADMIN),
  postController.findOwn
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
  authentication,
  authorization(ROLES.ADMIN),
  createPostValidator,
  validateFields,
  postController.save
);

//patch routes
router.patch(
  "/visibility/:identifier",
  authentication,
  authorization(ROLES.ADMIN),
  idInParamsValidator,
  validateFields,
  postController.toggleHidden
);

//delete routes
router.delete(
  "/:identifier",
  authentication,
  authorization(ROLES.ADMIN),
  idInParamsValidator,
  validateFields,
  postController.deleteById
);

module.exports = router;