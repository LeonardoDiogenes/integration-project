module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Addresses',
    }
  );

  Address.associate = (models) => {
    Address.hasMany(
      models.User,
      { foreignKey: 'addressId', as: 'address' }
    )
  };

  return Address;
};