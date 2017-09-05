const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        pw: req.body.pw,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};