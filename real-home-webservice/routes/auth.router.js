const express = require("express");
const router = express.Router();

const { authentication, authorization } = require("../middlewares/auth.middleware");
const { registerValidator, grantRoleValidator } = require("../validators/auth.validators");
const validateFields = require("../validators/index.middleware");
const ROLES = require("../data/roles.json");

const authController = require("../controllers/auth.controller");

// Get routes
router.get(
  "/whoami",
  authentication,
  authController.whoami
);

// Post routes
router.post(
  "/register",
  registerValidator,
  validateFields,
  authController.register
);

router.post(
  "/login",
  authController.login
);

// Patch routes
router.patch(
  "/grantRole",
  authentication,
  authorization(ROLES.SYSADMIN),
  grantRoleValidator,
  validateFields,
  authController.grantRole
);

router.patch(
  "/revokeRole",
  authentication,
  authorization(ROLES.SYSADMIN),
  grantRoleValidator,
  validateFields,
  authController.revokeRole
);



module.exports = router;