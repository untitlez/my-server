const OpenAI = require("openai");

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.createOpenAi = async (message) => {
  const response = await client.chat.responses.create({
    model: "gpt-4o-mini",
    input: message,
  });

  return response.choice[0].message.content;
};
