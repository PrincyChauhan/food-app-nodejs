const categoryModel = require("../models/categoryModel");

const createController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    if (!title || !imageUrl) {
      return res.status(500).send({
        success: false,
        message: "Please provide Category title or image",
      });
    }
    const newCategory = new categoryModel({
      title,
      imageUrl,
    });
    await newCategory.save();
    res.status(201).send({
      success: true,
      message: "Category Created",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in create category API",
      error,
    });
  }
};

const getAllCategoryController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    if (!categories) {
      return res
        .status(404)
        .send({ success: false, message: "No Categories Found" });
    }
    res
      .status(200)
      .send({ success: true, totalCategory: categories.length, categories });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Category API",
      error,
    });
  }
};

module.exports = { createController, getAllCategoryController };
