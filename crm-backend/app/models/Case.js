const mongoose = require("mongoose");

const CaseSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  priority: String,
  status: { type: String, default: "open" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Case", CaseSchema);
