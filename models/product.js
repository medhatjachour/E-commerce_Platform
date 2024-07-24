const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
        unique: true,
    },
    description:{
        type: String,
        required: true,
    },
    features:{
        type:Array,
        required: true,
    },
    imgs:{
        type: [String],
        required: true,
    },

    price:{
        type: Number,
        required: true,
    },
    discount:{
        type: Number,
    },
    quantity:{
        type: Number,
    },
    rating: {
        type: Number,
    }, 
    stockStatus: {
        type: Boolean,
        required: true,
    },  
    trending: {
        type: Boolean,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, { timestamps: true }); // automatically adds two properties to your documents: createdAt and updatedAt. These properties are managed by Mongoose and are of type Date.
  const Product = mongoose.model('product', productSchema);

  module.exports = Product