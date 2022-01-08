const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'CaptainAmerica',
    email: 'Captain@email.com',
    password: bcrypt.hashSync('Captainspwd',bcrypt.genSaltSync(10)),
  },
  {
    username: 'IronMan',
    email: 'Iron@email.com',
    password: bcrypt.hashSync('Ironspwd',bcrypt.genSaltSync(10)),
  },
  {
    username: 'IncredibleHulk',
    email: 'Hulk@email.com',
    password: bcrypt.hashSync('Hulkspwd',bcrypt.genSaltSync(10)),
  },
  {
    username: 'ThorOdinson',
    email: 'Thor@email.com',
    password: bcrypt.hashSync('Thorspwd',bcrypt.genSaltSync(10)),
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;