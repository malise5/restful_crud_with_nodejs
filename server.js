const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./model/productModel");
const app = express();
const port = 8000;

//middleware to read json file
app.use(express.json());
app.use(cors());

//ROUTES
const router = express.Router();

//Get all product
app.get("/api/v1/products", async (req, res) => {
  try {
    const products = await Product.find(req.query);
    res.status(200).json({
      availableProducts: products.length,
      products,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

//Single Product
app.get("/api/v1/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

//update a product
app.put("/api/v1/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Product with id ${id} not found` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

//Delete
app.delete("/api/v1/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find product with id ${id}` });
    }
    res.status(200).json({ message: "Product was deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//crete data to database
app.post("/api/v1/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
});

// '============Database Connection=======================

mongoose
  .connect(
    "mongodb+srv://malise:malise@cluster1.ulbt2t8.mongodb.net/Node-Api?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("====================================");
    console.log("Connection to the Database is established");
    console.log("====================================");

    // '============Server Port=======================
    app.listen(port, () => {
      console.log("====================================");
      console.log("Server Listening on port " + port);
      console.log("====================================");
    });
    // =============Server Port=======================
  })
  .catch((err) => {
    console.log(err);
  });
// '============Database Connection=======================
