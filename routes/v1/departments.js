const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/departments');
const validation = require('../../validation/departments');

const router = express.Router();

// list with pagination
router.route('/list')
  .get(validate(validation.departmentGetList), controller.departmentGetList);

// departments CRUD
router.route('/')
  .post(validate(validation.departmentCreate), controller.departmentCreate);

router.route('/:id')
  .get(validate(validation.departmentGet), controller.departmentGet)
  .put(validate(validation.departmentUpdate), controller.departmentUpdate)
  .delete(validate(validation.departmentDelete), controller.departmentDelete);

module.exports = router;
