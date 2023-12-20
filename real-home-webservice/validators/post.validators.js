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
    .notEmpty().withMessage("Description is required")
    .isLength({ max: 500 }).withMessage("Description max length is 500 characters"),
  
  body("price")
    .notEmpty().withMessage("Price is required")
    .isFloat().withMessage("Price must be a number"),
  
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
    .notEmpty().withMessage("terrainSize is required")
    .isFloat().withMessage("terrainSize must be a number"),

  body("constructionSize")
    .notEmpty().withMessage("constructionSize is required")
    .isInt().withMessage("constructionSize must be a number"),
  
  body("rooms")
    .notEmpty().withMessage("Rooms is required")
    .isInt().withMessage("Rooms must be a number"),

  body("restrooms")
    .notEmpty().withMessage("Restrooms is required")
    .isInt().withMessage("Restrooms must be a number"),

  body("parking")
    .notEmpty().withMessage("Parking is required")
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