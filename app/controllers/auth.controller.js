const config = require("../config/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.user;
const Op = db.Op;

module.exports = {

  signin: async (req, res) => {
    try {
      const { username, password } = req.body;
      const users = {
        id: 1,
        username: "admin",
        password: "Admin123!@#"
      }
      if (users.username === username) {
        if (users.password === password) {

          const SECRET_KEY = "codefortomorrowtaskproject"
          const token = jwt.sign({
            username: users.username,
            id: users.id
          }, SECRET_KEY);
          return res.status(201).send({
            message: "User logged in successfully.",
            token: token
          });
        }
        else {
          return res.status(401).send({
            message: "Password is incorrect."
          });
        }
      } else {
        return res.status(404).send({
          message: "User not found."
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while creating the User."
      });
    }
  }
}