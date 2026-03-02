const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

// ==============================
// POST - Save Result
// ==============================
router.post("/save", async (req, res) => {
  try {
    const { name, career, percentage } = req.body;

    const newResult = new Result({
      name,
      career,
      percentage
    });

    await newResult.save();

    res.status(201).json({
      message: "Result saved successfully ✅"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error saving result ❌",
      error: error.message
    });
  }
});

// ==============================
// GET - Fetch All Results
// ==============================
router.get("/all", async (req, res) => {
  try {
    const results = await Result.find().sort({ createdAt: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching results ❌"
    });
  }
});

// ==============================
// DELETE - Delete Result
// ==============================
router.delete("/delete/:id", async (req, res) => {
  try {
    await Result.findByIdAndDelete(req.params.id);

    res.json({
      message: "Result deleted successfully 🗑️"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting result ❌"
    });
  }
});

module.exports = router;