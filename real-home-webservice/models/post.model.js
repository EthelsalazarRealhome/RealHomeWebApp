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
  images: {
    type: [String],
    required: true
  },
  service: {
    type: String,
    trim: true,
    required: true
  },
  type: {
    type: String,
    trim: true,
    required: true
  },
  location: {
    type: String,
    required: true,
  },
  terrainSize: {
    type: Number,
    required: true
  },
  constructionSize: {
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
  contact: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  hidden: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = Mongoose.model("Post", postSchema);