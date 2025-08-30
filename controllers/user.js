const {
  getAllUser,
  getUser,
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
    const { _id } = req.user;
    const { id } = req.params;
    if (_id !== id) return res.status(400).json({ error: "No id provided" });

    const payload = await getUser(id);
    if (!payload) return res.status(404).json({ error: "Not found" });

    return res.json(payload);
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
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

    return res.json("Update success!");
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
