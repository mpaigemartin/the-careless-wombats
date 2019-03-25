const User = require('../models/User');
const jwt = require('jsonwebtoken');

const protectedPaths = ['/api/protected'];

module.exports = function (req, res, next) {
  if(!protectedPaths.includes(req.path)) return next();
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new Error();
    const token = authorization.replace("Bearer ", "");
    //const decoded = jwt.verify(token, 
      //config.jwtSecret
      //);
    User.find({ id: decoded.data})
    //
    .then(function(user) {
      req.user = user;
      next();
    });
  } catch (err) {
    res.status(401).json({err: "Unauthorized"});
  }
}