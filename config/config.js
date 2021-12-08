const dotenv = require('dotenv')
dotenv.config()


module.exports = {
  "development": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD_USER,
    "database": process.env.DB_NAME,
    "host": process.env.USER_NAME,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD_USER,
    "database": process.env.DB_NAME,
    "host": process.env.USER_NAME,
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable":process.env.DATABASE_URL,
    "dialect": "postgres"
  }
}