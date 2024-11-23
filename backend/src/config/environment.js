require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 8000,
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/?directConnection=true',
  SECRET_KEY: process.env.SECRET_KEY || 'R7ThKJxdrMO0sov2',
};
