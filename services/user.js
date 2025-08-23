const { User } = require("../model/user");
const bcrypt = require("bcryptjs");

exports.getAllUser = async () => {
  return await User.find();
};

exports.getUser = async (id) => {
  return await User.findById(id);
};

exports.loginUser = async ({ username, password }) => {
  const services = await User.findOne({ username });
  if (!services) return null;

  const isMatch = await bcrypt.compare(password, services.password);
  if (!isMatch) return null;

  return services;
};

exports.createUser = async (data) => {
  const { username, password } = data;
  const checkUser = await User.findOne({ username });
  if (checkUser) return null;

  const hashedPassword = await bcrypt.hash(password, 10);
  if (!username || !password) return null;

  const services = await User.create({
    username,
    password: hashedPassword,
  });

  return {
    id: services._id,
    username: services.username,
    role: services.role,
  };
};

exports.updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
