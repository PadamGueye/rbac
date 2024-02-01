const Product = require("../models/productModel");
const { createValidationError, createNotFoundError } = require("../middlewares/errorHandlers");
const {Types} = require("mongoose");

exports.createProduct = async (req, res, next) => {
    try {
        const data = { ...req.body };
        const { name } = req.body;

        if (!name) {
            throw createValidationError('Product', "Missing product name, please give correct product name.");
        }

        const newProduct = await Product.create(data);
        return res.status(201).json({ data: newProduct });
    } catch (e) {
        next(e);
    }
};

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ data: products });
    } catch (e) {
        next(e);
    }
};

exports.getProduct = async (req, res, next) => {
    try {
        const { productId } = req.params;

        if (!productId) {
            throw createValidationError('Product', "Please provide the product identifier.");
        }

        const product = await Product.findById(productId);

        if (!productId) {
            throw createNotFoundError('Product', `Product with your given ID not found`);
        }

        res.status(200).json({ data: product });
    } catch (e) {
        next(e);
    }
};

exports.updateProduct = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const { name, description, price } = req.body;

        if (!productId) {
            throw createValidationError('Product', 'Please provide the product identifier.');
        }

        const updatedProduct = await Product.findByIdAndUpdate(productId, { name, description, price }, { new: true });

        if (!updatedProduct) {
            throw createNotFoundError('Product', `Product with ID ${productId} not found`);
        }

        res.status(200).json({ data: updatedProduct });
    } catch (e) {
        next(e);
    }
}
exports.deleteProduct = async (req, res, next) =>{
    try {
        const {productId} = req.params;
        if (!productId) {
            throw createValidationError('Product', 'Please provide the product identifier.');
        }

        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct){
            throw createNotFoundError('Product', `Product with ID ${productId} not found`);
        }

        res.status(200).json({ data: null, message: 'Product has been deleted' });
    } catch (e) {
        next(e);
    }
}