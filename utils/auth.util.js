const jwt = require('jsonwebtoken');
function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '300s' });
  }

module.exports = {generateAccessToken};