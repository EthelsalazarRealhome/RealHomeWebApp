const debug = require("debug")("app:auth-middleware");
const { verifyToken } = require("../utils/jwt.tools");
const User = require("../models/user.model");

const ROLES = require("../data/roles.json");
const PREFIX = "Bearer";

const middlewares = {};

middlewares.authentication = async (req, res, next) => {
  try {
    debug("User Authentication");
    
    //Getting token from Authorization header
    const { authorization } = req.headers;
    
    if(!authorization) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    
    //validating token
    //comes as: Bearer aofaosinfaosifna.aosjfnaosjfnaosjfnoas.aosjfnaojsfnaosjk
    const [prefix, token] = authorization.split(" ");
    
    if(prefix !== PREFIX) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    
    if(!token) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    
    const payload = await verifyToken(token);
    if(!payload) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    
    //getting user
    const userId = payload["sub"];
    
    //Verifying user
    const user = await User.findById(userId);
    if(!user) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    
    //Verifying if the token is registered
    const isTokenValid = user.tokens.includes(token);
    if(!isTokenValid) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    
    //adding user to the request
    req.user = user;
    req.token = token;
    
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


middlewares.authorization = (requiredRole = ROLES.ADMIN) => {
  return (req, res, next) => {
    // User must be authenticated before getting to this middleware
    try {
      const { roles=[] } = req.user;
      
      //Verifying if user has the required role
      const isAuth = roles.includes(requiredRole);
    
      if(!isAuth) {
        return res.status(403).json({ error: "Forbidden" });
      }

      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}


module.exports = middlewares;