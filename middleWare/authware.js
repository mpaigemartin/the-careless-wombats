const User = require('../models/User');
const jwt = require('jsonwebtoken');


//This is where we add our routes that are protected.
const protectedPaths = ['/api/protected'];

module.exports = function (req, res, next) {
  //if route-by-route, delete 10 and 6
  if(!protectedPaths.includes(req.path)) return next();
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new Error();
    const token = authorization.replace("Bearer ", "");
    //Example uses config.jwtSecret to add our secret, however we can probably use an environment variable
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
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