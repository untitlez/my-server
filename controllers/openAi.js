const { createOpenAi } = require("../services/openAi");

exports.openAi = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.send("No message");

    const reply = await createOpenAi(message);
    if (!reply) return res.send("Can not connect");

    res.send(reply);
  } catch {
    res.status(500).send({ error: "Something went wrong" });
  }
};
