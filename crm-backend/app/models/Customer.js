const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: String,
  status: { type: String, default: "active" }
});

module.exports = mongoose.model("Customer", CustomerSchema);
