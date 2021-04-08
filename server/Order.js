const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  username: String,
  items: [String],
  totalprice: { type: Number },
});

mongoose.model("order", OrderSchema);
