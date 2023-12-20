const { body, param } = require("express-validator");

const validators = {};

const possibleTypes = []; //to-do

validators.createPostValidator = [
  param("identifier")
    .optional()
    .notEmpty().withMessage("Id is required")
    .isMongoId().withMessage("Id must be a Mongo Id"),

  body("title")
    .notEmpty().withMessage("Title is required"),
  
  body("description")
    .notEmpty().withMessage("Description is required")
    .isLength({ max: 500 }).withMessage("Description max length is 500 characters"),
  
  body("price")
    .notEmpty().withMessage("Price is required")
    .isFloat().withMessage("Price must be a number"),
  
  body("image")
    .notEmpty().withMessage("Image is required")
    .isURL().withMessage("Image must be a URL"),

  body("type")
    .notEmpty().withMessage("Type is required")
    .toLowerCase()
    .isIn(possibleTypes).withMessage("Type format incorrect"),
  
  body("size")
    .notEmpty().withMessage("Size is required")
    .isFloat().withMessage("Price must be a number"),
  
  body("rooms")
    .notEmpty().withMessage("Rooms is required")
    .isInt().withMessage("Rooms must be a number"),

  body("restrooms")
    .notEmpty().withMessage("Restrooms is required")
    .isInt().withMessage("Restrooms must be a number"),

  body("parking")
    .notEmpty().withMessage("Parking is required")
    .isInt().withMessage("Parking must be a number"),
];

module.exports = validators;