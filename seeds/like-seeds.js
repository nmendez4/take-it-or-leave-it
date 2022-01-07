const { Like } = require('../models');

const likeData = [
  {
    user_id: 1,
    post_id: 3,
  },
  {
    user_id: 2,
    post_id: 3,
  },
  {
    user_id: 3,
    post_id: 4,
  },
  {
    user_id: 4,
    post_id: 1,
  },
];

const seedLikes = () => Like.bulkCreate(likeData);

module.exports = seedLikes;