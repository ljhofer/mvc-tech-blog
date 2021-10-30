const { User } = require('../models');

const userData = [
  {
    username: "techie22",
    email: "techie22@gmail.com",
    password: "asdfaef2423r4"
  },
  {
    username: "dev27",
    email: "dev27@gmail.com",
    password: "asdI@@hf38"
  },
  {
    username: "computerlover",
    email: "computerlover@gmail.com",
    password: "@*&YHFEHWR#"
  },
  
];

const seedProducts = () => User.bulkCreate(userData);

module.exports = seedProducts;
