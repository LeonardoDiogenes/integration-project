const userService = require('../services/User.service');

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userService.getById(id);
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Internal error' });
  }
};

module.exports = {
  getById,
}