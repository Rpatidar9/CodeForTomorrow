const { tokenVerification } = require("../middlewares/AuthTokenVerify");
const controller = require("../controllers/auth.controller");
const express = require("express");
const Router = express.Router();

Router.post("/signin", controller.signin);

module.exports = Router;