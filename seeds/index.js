const seedCategories = require('./category-seeds');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');
const seedLikes = require('./like-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
 
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');
    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');
    await seedLikes();
    console.log('\n----- LIKES SEEDED -----\n');
    process.exit(0);
  };

  
  seedAll();