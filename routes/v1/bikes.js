const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/bikes');
const validation = require('../../validation/bikes');

const router = express.Router();

// list with pagination
router.route('/list')
  .get(validate(validation.bikeGetList), controller.bikeGetList);

// bike CRUD
router.route('/')
  .post(validate(validation.bikeCreate), controller.bikeCreate);

router.route('/:id')
  .get(validate(validation.bikeGet), controller.bikeGet)
  .put(validate(validation.bikeUpdate), controller.bikeUpdate)
  .delete(validate(validation.bikeDelete), controller.bikeDelete);

module.exports = router;
