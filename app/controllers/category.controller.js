const config = require("../config/config");
const db = require("../models");
const Category = db.category;
const Service = db.service;
const Op = db.Op;

module.exports = {
  create: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category.create({
        name: name
      });
      return res.status(200).send({
        message: "Category created successfully.",
        category: category
      });

    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while creating the Category."
      });
    }
  },
  findAll: async (req, res) => {
    try {
      const categories = await Category.findAll({
        include: [
          {
            model: Service,
            as: 'serviceDetails',
            attributes: ["name", "type"]
          }
        ]
      });
      return res.status(200).send({
        message: "Categories retrieved successfully.",
        categories: categories
      });
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving categories."
      });
    }
  },
  updateById: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const category = await Category.update({
        name: name
      }, {
        where: {
          id: id
        }
      });
      return res.status(200).send({
        message: "Category updated successfully.",
        category: category
      });

    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while updating Category."
      });
    }
  },
  deleteById: async (req, res) => {
    try {
      const id = req.params.id;
      const categories = await Category.findOne({
        where: { id: id },
        include: [
          {
            model: Service,
            as: 'serviceDetails',
            attributes: ["name", "type"]
          }
        ]
      });
      if (!categories) return res.status(200).send({
        message: "Category is not found",
        category: category
      });
      if (categories.serviceDetails.length > 1) {
        return res.status(200).send({
          message: "You have multiple service",
          category: category
        });
      }
      const category = await Category.destroy({
        where: {
          id: categories?.id
        }
      });
      return res.status(200).send({
        message: "Category deleted successfully.",
        category: category
      });
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while deleting Category."
      });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findOne({
        where: {
          id: id
        }
      });
      return res.status(200).send({
        message: "Category retrieved successfully.",
        category: category
      });

    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving Category."
      });
    }
  }

}