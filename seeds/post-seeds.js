const { Post } = require('../models');

const postData = [
  {
    product_name: 'toaster',
    description: 'It is toaster',
    user_id: 1,
    category_id: 4,
    img_file: 'toaster.jpg',
    price: 25.00
  },
  {
    product_name: 'earpods',
    description: 'they are earpods',
    user_id: 2,
    category_id: 3,
    img_file: 'earpods.jpg',
    price: 225.00
  },
  {
    product_name: 'T-shirt',
    description: 'A band t-shirt',
    user_id: 3,
    category_id: 1,
    img_file: 'tshirt.jpg',
    price: 21.00
  },
  {
    product_name: 'Sofa',
    description: 'A comfey sofa',
    user_id: 4,
    category_id: 2,
    img_file: 'sofa.jpg',
    price: 250.00
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;