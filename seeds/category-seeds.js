const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Clothing',
  },
  {
    category_name: 'Furniture',
  },
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Appliances',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;