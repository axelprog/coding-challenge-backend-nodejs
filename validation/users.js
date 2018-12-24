const Joi = require('joi');

const userRoles = require('../utils/enums/userRoles').roles;

// POST api/v1/users
exports.userCreate = {
  body: {
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid(Object.values(userRoles)).required()
  }
};

// GET api/v1/users/:id
exports.userGet = {
  params: {
    id: Joi.number().integer().required()
  }
};

// PUT api/v1/users/:id
exports.userUpdate = {
  params: {
    id: Joi.number().integer().required()
  },
  body: {
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
    role: Joi.string().valid(Object.values(userRoles))
  }
};

// DELETE api/v1/users/:delete
exports.userDelete = {
  params: {
    id: Joi.number().integer().required()
  }
};
