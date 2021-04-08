const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
});

mongoose.model("item", ItemSchema);
