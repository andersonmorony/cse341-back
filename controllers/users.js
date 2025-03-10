const mongodb = require("../data/database");
const ObbejctId = require("mongodb").ObjectId;

const getUsers = (req, res, next) => {
  mongodb
    .getDataBase()
    .db("Project1")
    .collection("Users")
    .find()
    .toArray()
    .then((users) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred." });
    });
};

const getUser = (req, res, next) => {
  const userId = req.params.userId;
  mongodb
    .getDataBase()
    .db("Project1")
    .collection("Users")
    .findOne({ _id: new ObbejctId(userId) })
    .then((user) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred." });
    });
};

module.exports = { getUsers, getUser };
