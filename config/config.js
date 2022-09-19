// in ./config/config.js
const fs = require('fs')
require('dotenv').config()

module.exports = {
  development: {
    // add the key/values pairs from your config.json here
    "database": "a_mile_in_her_mind",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URI'
  }
}