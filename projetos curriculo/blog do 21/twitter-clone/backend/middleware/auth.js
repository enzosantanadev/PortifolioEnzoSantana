const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        return res.status(401).send('Token inválido');
      }
      req.userId = decoded.id;
      next();
    });
  } else {
    res.status(401).send('Token necessário');
  }
};
