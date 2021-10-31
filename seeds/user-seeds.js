const { User } = require('../models');

const userData = [
  {
    username: "techie22",
    password: "asdfaef2423r4"
  },
  {
    username: "dev27",
    password: "asdI@@hf38"
  },
  {
    username: "computerlover",
    password: "@*&YHFEHWR#"
  },
  
];

const seedProducts = () => User.bulkCreate(userData);

module.exports = seedProducts;
