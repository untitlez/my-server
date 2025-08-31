const jwt = require("jsonwebtoken");
const { signinUser, signUpUser } = require("../services/auth");

exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ error: "No username or password" });

    const payload = await signinUser({ username, password });
    if (!payload) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      {
        _id: payload._id,
        username: payload.username,
        role: payload.role,
        fullName: payload.fullName,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ message: "Login success", token });
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const payload = await signUpUser({ username, password });
    if (!payload) {
      return res.status(409).json({ error: "Username already exists" });
    }

    return res.status(201).json(payload);
  } catch {
    res.status(500).json({ error: "Something went wrong" });
  }
};
