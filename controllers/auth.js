exports.admin = async (req, res) => {
  return res.json({ message: "Welcome admin!", role: req.user.role });
};

exports.member = async (req, res) => {
  return res.json({ message: "Hello member or admin!", role: req.user.role });
};
