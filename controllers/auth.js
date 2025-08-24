const jwt = require("jsonwebtoken");
const { loginUser, createUser } = require("../services/auth");

exports.admin = async (req, res) => {
  return res.json({ message: "Welcome admin!", role: req.user.role });
};

exports.member = async (req, res) => {
  return res.json({ message: "Hello member or admin!", role: req.user.role });
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ error: "No username or password" });

    const payload = await loginUser({ username, password });
    if (!payload) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: payload._id, role: payload.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 60 * 60 * 1000,
    });

    return res.json({
      message: "Login success",
      user: {
        id: payload._id,
        username: payload.username,
        role: payload.role,
      },
    });
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.create = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const payload = await createUser({ username, password });
    if (!payload) {
      return res.status(409).json({ error: "Username already exists" });
    }

    return res.status(201).json(payload);
  } catch {
    res.status(500).json({ error: "Something went wrong" });
  }
};
