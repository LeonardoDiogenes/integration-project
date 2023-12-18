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

const createUser = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    
    const user = await userService.createUser(name, email, password, address);

    if (!user) {
      return res.status(500).json({ message: 'Erro no service createUser' });
    }

    return res.status(201).json({ message: `Usuário ${user.name} criado com sucesso.` });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Internal error' });
  }
}

module.exports = {
  getById,
  createUser,
}