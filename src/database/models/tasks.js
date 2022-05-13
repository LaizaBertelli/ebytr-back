const Tasks = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    userId: DataTypes.NUMBER,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    title: DataTypes.STRING,
  }, { timestamps: false, underscored: true });

  Tasks.associate = (models) => {
    Tasks.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
  };

  return Tasks;
}

module.exports = Tasks;
