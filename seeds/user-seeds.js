const { User } = require('../models');

const userData = [
  {
    username: 'CaptainAmerica',
    email: 'Captain@email.com',
    password: 'Captainspwd'
  },
  {
    username: 'IronMan',
    email: 'Iron@email.com',
    password: 'Ironspwd'
  },
  {
    username: 'IncredibleHulk',
    email: 'Hulk@email.com',
    password: 'Hulkspwd'
  },
  {
    username: 'ThorOdinson',
    email: 'Thor@email.com',
    password: 'Thorspwd'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;