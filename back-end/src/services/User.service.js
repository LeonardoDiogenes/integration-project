const { User, Address } = require('../models');

const getById = async (id) => {
  const user = await User.findOne({ where: { id },
    attributes: { exclude: ['password', 'addressId'] },
    include: [{ model: Address, as: 'address' }] });

  return user;
};

module.exports = {
  getById,
};