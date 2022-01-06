const seedCategories = require('./category-seeds');
const seedPosts = require('./post-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');
  
    process.exit(0);
  };

  
  seedAll();