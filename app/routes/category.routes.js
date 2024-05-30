const { tokenVerification } = require("../middlewares/AuthTokenVerify");
const controller = require("../controllers/category.controller");
const serviceController = require("../controllers/service.controller");
const express = require("express");
const Router = express.Router();


Router.post("/create", tokenVerification, controller.create);
Router.get("/get", tokenVerification, controller.findAll);
Router.patch("/update/:id", tokenVerification, controller.updateById);
Router.delete("/delete/:id", tokenVerification, controller.deleteById);


//service routes

Router.post("/:id/service/create", tokenVerification, serviceController.create);
Router.get("/:id/service/get", tokenVerification, serviceController.findAll);
Router.patch("/:id/service/update/:serviceId", tokenVerification, serviceController.updateById);
Router.delete("/:id/service/delete/:serviceId", tokenVerification, serviceController.deleteById);

module.exports = Router;
