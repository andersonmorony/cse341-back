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

const addUser = (req, res) => {

  const newUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    favoritecolor: req.body.favoritecolor,
    birthday: req.body.birthday
  };

  mongodb
    .getDataBase()
    .db("Project1")
    .collection("Users")
    .insertOne(newUser)
    .then((result) => {
      res.setHeader("Content-Type", "application/json");
      res.status(201).json({ message: "User added", userId: result.insertedId });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred." });
    });
};

const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    favoritecolor: req.body.favoritecolor,
    birthday: req.body.birthday
  };

  mongodb
    .getDataBase()
    .db("Project1")
    .collection("Users")
    .updateOne({ _id: new ObbejctId(userId) }, { $set: updatedUser })
    .then((result) => { 
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ message: "User updated", user: updatedUser});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred." });
    });
};

const deleteUser = (req, res) => {
  const userId = req.params.userId;

  mongodb
    .getDataBase()
    .db("Project1")
    .collection("Users")
    .deleteOne({ _id: new ObbejctId(userId) })
    .then((result) => {
      res.setHeader("Content-Type", "application/json");
      res.status(204).json({ message: "User deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred." });
    });
}

module.exports = { getUsers, getUser, addUser, updateUser, deleteUser };
