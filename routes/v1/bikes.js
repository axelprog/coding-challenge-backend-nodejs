const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/bikes');
const validation = require('../../validation/bikes');

const router = express.Router();

// bike CRUD
router.route('/')
  .post(validate(validation.bikeCreate), controller.bikeCreate);

router.route('/:id')
  .get(validate(validation.bikeGet), controller.bikeGet)
  .put(validate(validation.bikeUpdate), controller.bikeUpdate)
  .post(validate(validation.bikeDelete), controller.bikeDelete);

module.exports = router;
