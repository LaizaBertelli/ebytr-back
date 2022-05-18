const Tasks = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    userId: DataTypes.NUMBER,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    title: DataTypes.STRING,
  }, { timestamps: false, underscored: true });

  return Tasks;
}

module.exports = Tasks;
