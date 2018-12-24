const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/users');
const validation = require('../../validation/users');

const router = express.Router();

// users CRUD
router.route('/')
  .post(validate(validation.userCreate), controller.userCreate);

router.route('/:id')
  .get(validate(validation.userGet), controller.userGet)
  .put(validate(validation.userUpdate), controller.userUpdate)
  .delete(validate(validation.userDelete), controller.userDelete);

module.exports = router;
