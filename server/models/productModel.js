const mongoose = require("mongoose");

const Schema =  mongoose.Schema;

const productSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required: true,
    },
    inStock : {
        type : Boolean,
        default : false
    }
}, {collection : "products"});

const Product = mongoose.model('product', productSchema);

module.exports = Product;