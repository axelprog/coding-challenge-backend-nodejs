const Joi = require('joi');

// POST api/v1/bikes
exports.bikeCreate = {
  body: {
    license: Joi.string().required(),
    color: Joi.string().required(),
    type: Joi.string().required(),
    stealDate: Joi.date().required(),
    thiefDescription: Joi.string(),
    found: Joi.boolean(),
    owner: Joi.number().integer(),
    handle: Joi.any().forbidden()
  }
};

// GET api/v1/bikes/:id
exports.bikeGet = {
  params: {
    id: Joi.number().integer().required()
  }
};

// PUT api/v1/bikes/:id
exports.bikeUpdate = {
  params: {
    id: Joi.number().integer().required()
  },
  body: {
    license: Joi.string(),
    color: Joi.string(),
    type: Joi.string(),
    stealDate: Joi.date(),
    thiefDescription: Joi.string(),
    found: Joi.boolean(),
    owner: Joi.number().integer(),
    handle: Joi.number().integer()
  }
};

// DELETE api/v1/bikes/:delete
exports.bikeDelete = {
  params: {
    id: Joi.number().integer().required()
  }
};
