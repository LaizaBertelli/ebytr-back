const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, { timestamps: false, underscored: true });

  Users.associate = (models) => {
    Users.hasMany(models.Tasks, { foreignKey: 'userId', as: 'UserTasks' });
  }

  return Users;
};

module.exports = Users;
