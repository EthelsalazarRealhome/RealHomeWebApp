const User = require("../models/user.model");
const ROLES = require("../data/roles.json");

const { createToken, verifyToken } = require("../utils/jwt.tools");

const authController = {};

authController.register = async (req, res, next) => {
  try {
    //Getting user info 
    const { username, email, password } = req.body;

    //Verifying username and email existence
    const user = await User.findOne({ $or: [{username: username}, {email: email}] });

    if(user) { 
      return res.status(409).json({ error: "User already exists" });
    }

    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });

    await newUser.save();

    return res.status(201).json({ message: "User registered" });
  } catch (error) {
    next(error);
  }
}

authController.login = async (req, res, next) => {
  try {
    // Getting info
    const { identifier, password } = req.body;

    // Verifying user existence
    const user = await User.findOne({ $or: [{username: identifier}, {email: identifier}] });

    if(!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if(!user.comparePassword(password)) {
      return res.status(401).json({ error: "Incorrect password" });
    }


    // Creating and storing a token
    const token = await createToken(user._id);

    //Storing token
    // Verifying tokens integrity, 5 tokens max
    let _tokens = [...user.tokens]; 

    const _verifyPromises = _tokens.map(async (_t) => {
      const status = await verifyToken(_t);

      return status ? _t : null;
    });

    _tokens = (await Promise.all(_verifyPromises))
      .filter(_t => _t)
      .slice(0, 4);

    _tokens = [token, ..._tokens];
    user.tokens = _tokens; 

    await user.save();

    //returning token
    return res.status(200).json({ token });

  } catch (error) {
    next(error);
  }
}

authController.whoami = async (req, res, next) => {
  try {
    const { _id, username, email, roles } = req.user;

    return res.status(200).json({_id, username, email, roles});
  } catch (error) {
    next(error);
  }
}


authController.grantRole = async (req, res, next) => {
  try {
    const { username, role: newRole } = req.body;

    //getting user
    const user = await User.findOne({ username: username });

    if(!user) {
      return res.status(404).json({ error: "User not found" });
    }

    //getting actual rols
    let _roles = [...user.roles];

    const alreadyIs = _roles.findIndex(_r => _r === newRole) >= 0; //true or false

    //Verifying if rol is already asigned
    if(alreadyIs) {
      return res.status(401).json({ error: "Cannot assign a role twice" });
    } else {
      _roles = [newRole, ..._roles];
    }

    // Asigning rol to user
    user["roles"] = _roles;

    await user.save();
    
    return res.status(200).json({ message: `Granted ${newRole} role to user: ${user.username}` });
  } catch (error) {
    next(error);
  }
}

authController.revokeRole = async (req, res, next) => {
  try {
    const { username, role: toRevokeRole } = req.body;

    //getting user
    const user = await User.findOne({ username: username });

    if(!user) {
      return res.status(404).json({ error: "User not found" });
    }

    //getting actual rols
    let _roles = [...user.roles];

    const alreadyIs = _roles.findIndex(_r => _r === toRevokeRole) >= 0; //true or false

    //Verifying if rol is already asigned
    if(!alreadyIs) {
      return res.status(401).json({ message: "Cannot revoke a role not assigned previously" });
    } 

    //Revoking rol to user
    _roles = _roles.filter(_r => _r !== toRevokeRole)
    user["roles"] = _roles;

    await user.save();
    
    return res.status(200).json({ message: `Revoked ${toRevokeRole} role to user: ${user.username}` });
  } catch (error) {
    next(error);
  }
}


module.exports = authController;
