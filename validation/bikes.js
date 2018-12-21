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
  body: {
    license: Joi.string(),
    color: Joi.string(),
    type: Joi.string(),
    stealDate: Joi.date(),
    thiefDescription: Joi.string(),
    found: Joi.boolean(),
  }
};

// DELETE api/v1/bikes/:delete
exports.bikeDelete = {
  params: {
    id: Joi.number().integer().required()
  }
};
