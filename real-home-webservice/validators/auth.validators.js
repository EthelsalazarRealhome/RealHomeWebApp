const { body } = require("express-validator");
const ROLES = require("../data/roles.json");

const validators = {};

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/;
const possibleRoles = [ROLES.ADMIN];

validators.registerValidator = [
  body("username")
    .notEmpty().withMessage("Username is required")
    .isLength({ min: 4, max: 32 }).withMessage("Invalid username format"),

  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Email format incorrect"),
  
  body("password")
    .notEmpty().withMessage("Password is required")
    .matches(passwordRegex).withMessage("Invalid password format")  
]

validators.grantRoleValidator = [
  body("username")
    .notEmpty().withMessage("Username is required"),

  body("role")
    .notEmpty().withMessage("Role is required")
    .toLowerCase()
    .isIn(possibleRoles).withMessage("Role not valid")
];

module.exports = validators;