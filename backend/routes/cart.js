const express = require("express");
const Cart = require("../models/Cart");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/cart", authMiddleware, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate(
    "items.productId"
  );
  res.send(cart);
});

router.post("/cart", authMiddleware, async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    cart = new Cart({ userId: req.user.id, items: [] });
  }

  const itemIndex = cart.items.findIndex((item) =>
    item.productId.equals(productId)
  );

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  await cart.save();
  res.send(cart);
});

router.delete("/cart/:id", authMiddleware, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });

  cart.items = cart.items.filter(
    (item) => !item.productId.equals(req.params.id)
  );

  await cart.save();
  res.send(cart);
});

module.exports = router;
