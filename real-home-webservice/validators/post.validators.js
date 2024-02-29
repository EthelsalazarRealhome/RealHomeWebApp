const { body, param } = require("express-validator");

const validators = {};

const contactRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const possibleTypes = ["casa", "apartamento", "playa", "local/oficina/bodega", "terrenos/fincas", "casas de campo"]; 
const possibleServices = ["venta", "alquiler"];

validators.createPostValidator = [
  param("identifier")
    .optional()
    .notEmpty().withMessage("Id is required")
    .isMongoId().withMessage("Id must be a Mongo Id"),

  body("title")
    .notEmpty().withMessage("Title is required"),
  
  body("description")
    .notEmpty().withMessage("Description is required"),
  
  body("price")
    .notEmpty().withMessage("Price is required")
    .isFloat().withMessage("Price must be a number"),

  body("neg_price")
    .optional()
    .isLength({ max: 5 }).withMessage("neg_price must be 'true' or 'false'")
    .isIn(["true", "false"]).withMessage("neg_price format incorrect"),
  
  body("images")
    .notEmpty().withMessage("Image is required")
    .isURL().withMessage("Image must be a URL"),

  body("service")
    .notEmpty().withMessage("Service is required")
    .toLowerCase()
    .isIn(possibleServices).withMessage("Service format incorrect"),

  body("type")
    .notEmpty().withMessage("Type is required")
    .toLowerCase()
    .isIn(possibleTypes).withMessage("Type format incorrect"),
  
  body("location")
    .notEmpty().withMessage("Location is required")
    .isLength({ max: 100 }).withMessage("Location max length is 100 characters"),
  
  body("terrainSize")
    .notEmpty().withMessage("terrainSize is Required")
    .isFloat().withMessage("terrainSize must be a number"),

  body("constructionSize")
    .notEmpty().withMessage("constructionSize is Required")
    .isInt().withMessage("constructionSize must be a number"),
  
  body("rooms")
    .notEmpty().withMessage("rooms is Required")
    .isInt().withMessage("Rooms must be a number"),

  body("restrooms")
    .notEmpty().withMessage("restrooms is Required")
    .isInt().withMessage("Restrooms must be a number"),

  body("parking")
    .notEmpty().withMessage("parking is Required")
    .isInt().withMessage("Parking must be a number"),

  body("contact")
    .notEmpty().withMessage("Contact is required")
    .matches(contactRegex).withMessage("Contact format incorrect")
];

validators.idInParamsValidator = [
  param("identifier")
    .notEmpty().withMessage("Id is required")
    .isMongoId().withMessage("Id must be a Mongo Id")
];

module.exports = validators;