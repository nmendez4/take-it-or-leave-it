const { Post } = require('../models');

const postData = [
  {
    product_name: 'toaster',
    description: 'It is toaster',
  },
  {
    product_name: 'earpods',
    description: 'they are earpods',
  },
  {
    product_name: 'T-shirt',
    description: 'A band t-shirt',
  },
  {
    product_name: 'Sofa',
    description: 'A comfey sofa',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;