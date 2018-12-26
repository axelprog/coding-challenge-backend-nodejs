const Joi = require('joi');

// POST api/v1/departments
exports.departmentCreate = {
  body: {
    name: Joi.string().required(),
    description: Joi.string()
  }
};

// GET api/v1/departments/:id
exports.departmentGet = {
  params: {
    id: Joi.number().integer().required()
  }
};

// PUT api/v1/departments/:id
exports.departmentUpdate = {
  params: {
    id: Joi.number().integer().required()
  },
  body: {
    name: Joi.string(),
    description: Joi.string()
  }
};

// DELETE api/v1/departments/:delete
exports.departmentDelete = {
  params: {
    id: Joi.number().integer().required()
  }
};


// GET api/v1/departments/list
exports.departmentGetList = {
  query: {
    limit: Joi.number().integer().min(0).required(),
    page: Joi.number().integer().min(0).required()
  }
};
