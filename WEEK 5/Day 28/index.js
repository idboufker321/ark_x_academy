const Product = require('./models/productModel');
const sampleData = require('./sampleData');


// Connect to MongoDB
require('./db');

// Insert products
Product.insertMany(sampleData)
  .then(() => console.log('Sample products inserted successfully.'))
  .catch(err => console.error('Error inserting sample products:', err));
  
// Sort products by price in descending order
Product.find().sort({ price: -1 }).then(products => console.log('Sorted products by price:', products));

// Pagination - Limiting Results: Limit the results to 5 products per page and log the first page of products.
const pageSize = 5;
const pageNumber = 1;
Product.find().skip((pageNumber - 1) * pageSize).limit(pageSize).then(products => console.log('First page of products:', products));

// Custom Pagination with Variables
const customPageSize = 2;
const customPageNumber = 3;
Product.find().skip((customPageNumber - 1) * customPageSize).limit(customPageSize).then(products => console.log('Custom paginated products:', products));

// Aggregation - Count Products in Stock
Product.aggregate([
  { $match: { inStock: true } },
  { $count: "totalInStock" }
]).then(result => console.log('Total products in stock:', result));

// Aggregation - Calculate Average Price
Product.aggregate([
  { $group: { _id: null, avgPrice: { $avg: "$price" } } }
]).then(result => console.log('Average price of all products:', result));

