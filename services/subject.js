const { Subject } = require("../model/subject");

exports.getAllData = async () => {
  return await Subject.find();
};

exports.createData = async (data) => {
  return await Subject.create(data);
};

exports.updateData = async (id, data) => {
  return await Subject.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteData = async (id) => {
  return await Subject.findByIdAndDelete(id);
};
