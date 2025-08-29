const {
  getAllData,
  createData,
  updateData,
  deleteData,
} = require("../services//subject");

exports.read = async (req, res) => {
  try {
    const payload = await getAllData();
    if (!payload) return res.json("No Data");
    return res.json(payload);
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.create = async (req, res) => {
  try {
    const body = req.body;
    if (!body) return res.status(400).json({ error: "No body provided" });

    const payload = await createData(body);
    return res.status(201).json({ message: "Create successful" }, payload);
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

    const payload = await updateData(id, body);
    if (!payload) return res.status(404).json({ error: "Not found" });

    return res.json({ message: "Update successful" }, payload);
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "No id provided" });

    const deleted = await deleteData(id);
    if (!deleted) return res.status(404).json({ error: "Not found" });

    return res.json({ message: "Delete successful" });
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
};
