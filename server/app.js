const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("./Item");
require("./User");
require("./Order");
require("./Url");
app.use(cors());
app.use(express.json());
var url = require("./Url");

const Item = mongoose.model("item");
const User = mongoose.model("user");
const Order = mongoose.model("order");

const mongoUrl = url.urltext();

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB");
});

mongoose.connection.on("error", (error) => {
  console.log("error", error);
});

app.get("/items", (req, res) => {
  Item.find({}).then((result) => {
    res.send(result);
  });
});
app.get("/orders", (req, res) => {
  Order.find({}).then((result) => {
    res.send(result);
  });
});

app.get("/users", (req, res) => {
  User.find({}).then((result) => {
    res.send(result);
  });
});

app.post("/orders", (req, res) => {
  const order = new Order({
    username: req.body.currentUser,
    items: req.body.list,
    totalprice: req.body.totalPrice,
  });
  order
    .save()
    .then((data) => {
      console.log(data);
      res.send({ text: "success" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/users", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  user
    .save()
    .then((data) => {
      console.log(data);
      res.send({ text: "success" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/items", (req, res) => {
  const item = new Item({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });
  item
    .save()
    .then((data) => {
      console.log(data);
      res.send({ text: "success" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(8080, () => {
  console.log("server running");
});
