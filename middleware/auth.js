const jwt = require("jsonwebtoken");
const { Role } = require("../model/user");

exports.verifyToken = (req, res, next) => {
  try {
    // Fetch
    const authHeader = req.headers["authorization"];
    const bearerToken = authHeader?.split(" ")[1];
    // Axios
    const cookiesToken = req?.cookies?.token;

    const token = bearerToken || cookiesToken;

    if (!token) return res.status(401).json({ message: "No token provided" });

    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
};

exports.checkRole = (req, res, next) => {
  if (![Role.MEMBER, Role.ADMIN].includes(req.user.role)) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};

exports.onlyAdmin = (req, res, next) => {
  const { id, role } = req.user;
  if (role === Role.ADMIN || id === req.params.id) {
    return next();
  }
  next();
  return res.status(403).json({ message: "Forbidden" });
};
