const express = require("express");
const Product = require("../models/Product");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
});

router.post(
  "/products",
  [authMiddleware, adminMiddleware],
  async (req, res) => {
    const product = new Product(req.body);

    try {
      await product.save();
      res.status(201).send(product);
    } catch (error) {
      res.status(400).send("Error creating product");
    }
  }
);

router.put(
  "/products/:id",
  [authMiddleware, adminMiddleware],
  async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(product);
    } catch (error) {
      res.status(400).send("Error updating product");
    }
  }
);

router.delete(
  "/products/:id",
  [authMiddleware, adminMiddleware],
  async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.send("Product deleted");
    } catch (error) {
      res.status(400).send("Error deleting product");
    }
  }
);

module.exports = router;
