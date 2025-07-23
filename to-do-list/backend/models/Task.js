const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  due_date: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "overdue"],
    default: "pending",
  },
  tags: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Task", TaskSchema);
