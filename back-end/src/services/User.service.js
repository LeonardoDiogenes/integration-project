const { User } = require('../models');

const getById = async (id) => {
  const user = User.findOne({ where: { id } });

  return user;
};

module.exports = {
  getById,
};