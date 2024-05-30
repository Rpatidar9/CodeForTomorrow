
const db = require("../models");
const Service = db.service;
const Op = db.Op;


module.exports = {
  create: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const { name, type } = req.body;
      const service = await Service.create({
        name: name,
        type: type,
        category_id: categoryId,
      });
      return res.status(200).send({
        message: "Service created successfully.",
        service: service
      });
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while creating the Service."
      });
    }
  },
  findAll: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const services = await Service.findAll({ where: { category_id: categoryId } });
      return res.status(200).send({
        message: "Services retrieved successfully.",
        services: services
      });
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving services."
      });

    }
  },
  updateById: async (req, res) => {
    try {
      const id = req.params.serviceId;
      const { name, type, categoryId } = req.body;
      const service = await Service.update({
        name: name,
        type: type,
        category_id: categoryId
      }, {
        where: {
          id: id
        }
      });
      return res.status(200).send({ message: "Services update successfully", service: service })
    }
    catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while updating the Service."
      });
    }
  },
  deleteById: async (req, res) => {
    try {
      const id = req.params.serviceId;
      const service = await Service.destroy({
        where: {
          id: id
        }
      });
      return res.status(200).send({ message: "Service deleted successfully", data: "Service deleted successfully" })
    }
    catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while deleting the Service."
      });
    }
  },
  getById: async (req, res) => {
    try {

      const { id } = req.params;
      const service = await Service.findOne({
        where: {
          id: id
        }
      });
      return res.status(200).send({
        service: service
      })
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving the Service."
      });

    }
  }
}