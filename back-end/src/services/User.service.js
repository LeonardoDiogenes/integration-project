const Sequelize = require('sequelize');
const config = require('../config/config');

const { User, Address } = require('../models');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const getById = async (id) => {
  const user = await User.findOne({ where: { id },
    attributes: { exclude: ['password', 'addressId'] },
    include: [{ model: Address, as: 'address' }] });

  return user;
};

const createUser = async (name, email, password, address) => {
  const { city, state, country } = address;
  const t = await sequelize.transaction();
  try {
    const address = await Address.create({ city, state, country }, { transaction: t });
    const addressId = address.id;

    const user = await User.create({ name, email, password, addressId }, { transaction: t });

    await t.commit();

    return user;

  } catch (error) {
    console.log(error.message);
    await t.rollback();
  }
};

module.exports = {
  getById,
  createUser,
};