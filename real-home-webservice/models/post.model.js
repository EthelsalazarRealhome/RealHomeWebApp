const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  type: {
    type: String,
    trim: true,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  restrooms: {
    type: Number,
    required: true
  },
  parking: {
    type: Number,
    required: true
  },
  hidden: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = Mongoose.model("Post", postSchema);