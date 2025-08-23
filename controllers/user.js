const jwt = require("jsonwebtoken");
const {
  getAllUser,
  getUser,
  loginUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../services/user");

exports.read = async (req, res) => {
  try {
    const payload = await getAllUser();
    return res.json(payload);
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.list = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "No id provided" });

    const payload = await getUser(id);
    if (!payload) return res.status(404).json({ error: "Not found" });

    return res.json(payload);
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
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
      secure: process.env.NODE_ENV === "production",
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

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "No id provided" });

    const body = req.body;
    if (!body) return res.status(400).json({ error: "No body provided" });

    const payload = await updateUser(id, body);
    if (!payload) return res.status(404).json({ error: "Not found" });

    return res.json(payload);
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "No id provided" });

    const deleted = await deleteUser(id);
    if (!deleted) return res.status(404).json({ error: "Not found" });

    return res.json({ message: "Delete successful" });
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
};
