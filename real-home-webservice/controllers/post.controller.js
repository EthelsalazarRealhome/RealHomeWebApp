const Post = require("../models/post.model");

const postController = {};

postController.save = async (req, res, next) => {
  try {
    const 
    { 
      title, 
      description, 
      price, 
      neg_price,
      images, 
      service, 
      type, 
      location, 
      terrainSize, 
      constructionSize, 
      rooms, 
      restrooms, 
      parking, 
      contact 
    } = req.body;
    
    const { identifier } = req.params;
    const { user } = req;

    let post = await Post.findById(identifier);

    if(!post) {
      post = new Post();
      post["user"] = user._id;
    } else {
      if(!post["user"].equals(user._id)){
        return res.status(403).json({ error: "This is not your post" });
      }
    }

    post["title"] = title;
    post["description"] = description;
    post["price"] = price;
    post["neg_price"] = neg_price;
    post["images"] = images;
    post["service"] = service;
    post["type"] = type;
    post["location"] = location;
    post["terrainSize"] = terrainSize;
    post["constructionSize"] = constructionSize;
    post["rooms"] = rooms;
    post["restrooms"] = restrooms;
    post["parking"] = parking;
    post["contact"] = contact;

    const savedPost = await post.save();

    if(!savedPost) {
      return res.status(409).json({ error: "Error creating post" });
    }

    return res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
}

postController.findAll = async (req, res, next) => {
  try {
    const posts =
      await Post.find({ hidden: false }).populate("user", "username email");

    return res.status(200).json({ posts });
  } catch (error) {
    next(error);
  }
}

postController.findHidden = async (req, res, next) => {
  try {
    const posts = await Post.find({ hidden: true }).populate("user", "username email");

    return res.status(200).json({ posts });
  } catch (error) {
    next(error);
  }
}

postController.findOwn = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;

    const posts = 
      await Post.find({ user: userId })
        .populate("user", "username email")
        .populate("applicants", "username email");

    return res.status(200).json({ posts });
  } catch (error) {
    next(error);
  }
}

postController.findOneById = async (req, res, next) => {
  try {
    const { identifier } = req.params;

    const post = 
      await Post.findOne({ _id: identifier }).populate("user", "username email");

    if(!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
}

postController.deleteById = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const { user } = req;

    const deletedPost = await Post.findOneAndDelete({ _id: identifier, user: user._id });

    if(!deletedPost) { 
      return res.status(404).json({ error: "Post not found" });
    }

    return res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    next(error);
  }
}

postController.toggleHidden = async (req, res, next) => {
  try {
    const { identifier } = req.params;

    const post = 
      await Post.findOne({ _id: identifier }).populate("user", "username email");

    if(!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    //toggling hidden
    post["hidden"] = !post["hidden"];

    //committing changes
    const newPost = await post.save();  

    return res.status(200).json(newPost);
  } catch (error) {
    next(error);
  }
}

module.exports = postController;