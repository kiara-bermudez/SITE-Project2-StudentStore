const express = require("express")
const Store = require("../models/store")
const {NotFoundError} = require("../utils/errors")
const router = express.Router()


// List all products
router.get("/", async (req, res, next) => {
    try {
      const products = await Store.listProducts();
      const purchases = await Store.listPurchases();
      res.status(200).json({ products, purchases })
    } catch (err) {
      next(err)
    }
})

router.get("/:productId", async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const product = await Store.fetchProductById(productId);
        if (!product) {
            throw new NotFoundError("ProductID Not Found");
        }
        res.status(200).json({product});
    } catch (error) {
        next(error);
    }
})

router.post("/", async (req, res, next) => {
    try {
        const shoppingCart = req.body.shoppingCart;
        const user = req.body.user;
        const newPurchaseOrder = await Store.createPurchaseOrder(shoppingCart, user);
        res.status(201).json({purchase:newPurchaseOrder});
    } catch (error) {
        next(error);
    }
})

module.exports = router;