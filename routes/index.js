const express = require('express');

const { wrapSuccessResponse } = require('../utils/ResponseWrapper');

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json(wrapSuccessResponse({
    title: 'Express'
  }));
});

module.exports = router;
