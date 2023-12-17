const userServices = require('../services/User.service');

const getById = async (req, res) => {
  const { id } = req.params;

  const user = userServices.getById(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.status(200).json(user);
};

module.exports = {
  getById,
}