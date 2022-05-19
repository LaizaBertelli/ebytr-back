require('dotenv').config({ path: '../.env' });

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: 'task_manager',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: 'task_manager',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
  production: {
    use_env_variable: process.env.CLEARDB_DATABASE_URL,
    dialect: 'mysql',
  }
}