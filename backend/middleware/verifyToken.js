const jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyToken(req, res, next) {
  const authToken = req.headers.authorization;
  const token = authToken && authToken.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Verify the token
  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Token is valid, attach the decoded payload to the request object
    req.user = decoded;
    next();
  });
}

function verifyAdmin(req, res, next) {
  // Check if the user has the admin role
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Unauthorized access" });
  }

  next();
}

function verifyStudent(req, res, next) {
  // Check if the user has the admin role
  if (req.user.role !== "student") {
    return res.status(403).json({ message: "Unauthorized access" });
  }

  next();
}

module.exports = { verifyToken, verifyAdmin, verifyStudent };
