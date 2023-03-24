const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },

    url: {
        type: String,
        require: true
    },

    price: {
        type: Number,
        require: true
    },

    rating: {
        type: Number,
        require: true
    },

    userId: {
        type: String,
        require: true
    }
}, {
    versionKey: false
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;