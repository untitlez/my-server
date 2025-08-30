const mongoose = require("mongoose");

const LessonPlanSchema = new mongoose.Schema(
  {
    classLevel: { type: String, required: true },
    subject: { type: String, required: true },
    unitName: { type: String, required: true },
    objectives: { type: String },
    activities: { type: String },
    assessment: { type: String },
    image: { type: String },
  },
  { timestamps: true },
);

const LessonPlan = mongoose.model("LessonPlan", LessonPlanSchema);
module.exports = { LessonPlan };
