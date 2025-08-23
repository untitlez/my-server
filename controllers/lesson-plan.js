const {
  getAllData,
  getData,
  searchData,
  createData,
  updateData,
  deleteData,
} = require("../services/lesson-plan");

exports.read = async (req, res) => {
  try {
    const payload = await getAllData();
    return res.json(payload);
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.list = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "No id provided" });

    const payload = await getData(id);
    if (!payload) return res.status(404).json({ error: "Not found" });

    return res.json(payload);
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.search = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.json("No Query");

    const payload = await searchData(query);
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

    const payload = await updateData(id, body);
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

    const deleted = await deleteData(id);
    if (!deleted) return res.status(404).json({ error: "Not found" });

    return res.json({ message: "Delete successful" });
  } catch {
    return res.status(500).json({ error: "Something went wrong" });
  }
};
