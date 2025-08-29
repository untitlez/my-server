const mongoose = require("mongoose");

const Role = {
  MEMBER: "MEMBER",
  ADMIN: "ADMIN",
};

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(Role),
      required: true,
      default: Role.MEMBER,
    },
    fullName: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = { User, Role };
