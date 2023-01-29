const mongoose = require("mongoose");

const ProjecttSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
});

module.exports = mongoose.model("Project", "ProjectSchema");
