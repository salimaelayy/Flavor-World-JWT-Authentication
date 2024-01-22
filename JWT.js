const { sign } = require('jsonwebtoken')

const createToken = (user) => {
  const accessToken = sign(
    { username: user.username, id: user.id },
    'thisisasecret', // Replace with your secret key, and consider storing it securely
    { expiresIn: '1h' },
  )

  return accessToken
}

module.exports = { createToken }
