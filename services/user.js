const { User } = require("../model/user");

exports.getAllUser = async () => {
  return await User.find().select("username role fullName");
};

exports.getUser = async (id) => {
  return await User.findById(id).select("username role fullName");
};

exports.updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true }).select(
    "username role fullName",
  );
};

exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
