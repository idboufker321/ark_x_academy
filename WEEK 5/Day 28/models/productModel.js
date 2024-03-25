const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: String,
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' } // Reference to the Category model
});

module.exports = mongoose.model('Product', productSchema);
