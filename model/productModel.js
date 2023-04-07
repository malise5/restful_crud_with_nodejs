const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name of the product is required"],
    },
    quantity: {
      type: Number,
      require: [true, "Quantity of the product is required"],
    },
    price: {
      type: Number,
      require: [true, "Price of the product is required"],
    },
    image: {
      type: String,
      require: [true, "Image of the product is required"],
    },
  },
  {
    timestamps: true,
  }
);

//Product Model

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
