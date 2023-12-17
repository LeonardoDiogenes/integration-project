module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Addresses',
        key: 'id'
      }
    },
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Users',
    }
  );

  User.associate = (models) => {
    User.belongsTo(
      models.Address,
      { foreignKey: 'addressId', as: 'address' }
    )
  };

  return User;
};