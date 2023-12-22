require('dotenv').config();

const Sequelize = require('sequelize');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, NODE_ENV } = process.env;

const { User, Address } = require('../models');

const env = NODE_ENV;
const sequelize = new Sequelize(config[env]);

const getById = async (id) => {
  const user = await User.findOne({ where: { id },
    attributes: { exclude: ['password', 'addressId', 'isAdmin'] },
    include: [{ model: Address, as: 'address' }] });

  return user;
};

const createUser = async (name, email, password, address) => {
  const { city, state, country } = address;
  const t = await sequelize.transaction();
  try {
    let addressId;
    const findAddress = await Address.findOne({ where: { city, state, country } });
    
    if (findAddress) {
      addressId = findAddress.id;
    } else {
      const address = await Address.create({ city, state, country }, { transaction: t });
      addressId = address.id;
    }

    const user = await User.create({ name, email, password, addressId }, { transaction: t });

    await t.commit();

    return user;

  } catch (error) {
    console.log(error.message);
    await t.rollback();
  }
};

const login = async (email, password) => {
  const findUser = await User.findOne({ where: { email, password }});

  if (!findUser) return null;
  
  const payload = {
    email: findUser.email,
    password: findUser.password
  }

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });

  return { token };

};

module.exports = {
  getById,
  createUser,
  login,
};