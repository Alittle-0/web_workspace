const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Create task
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Update task
router.put("/:id", async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete task
router.delete("/:id", async (req, res) => {
  const deleted = await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted", deleted });
});

module.exports = router;