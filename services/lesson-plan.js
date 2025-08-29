const { LessonPlan } = require("../model/lesson-plan");

exports.getAllData = async () => {
  return await LessonPlan.find();
};

exports.getData = async (id) => {
  return await LessonPlan.findById(id);
};

exports.searchData = async (query) => {
  return await LessonPlan.find({
    $or: [
      { classLevel: { $regex: query, $options: "i" } },
      { subject: { $regex: query, $options: "i" } },
      { unitName: { $regex: query, $options: "i" } },
      { objectives: { $regex: query, $options: "i" } },
      { activities: { $regex: query, $options: "i" } },
      { assessment: { $regex: query, $options: "i" } },
    ],
  }).sort({ createdAt: -1 });
};

exports.createData = async (data) => {
  return await LessonPlan.create(data);
};

exports.deleteData = async (id) => {
  return await LessonPlan.findByIdAndDelete(id);
};
