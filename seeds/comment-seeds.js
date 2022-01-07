const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'This thing is cool!',
    user_id: 1,
    post_id: 4,
  },
  {
    comment_text: 'This thing is ugly!',
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: 'This thing is too expensive!',
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: 'This thing is a good product!',
    user_id: 4,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;