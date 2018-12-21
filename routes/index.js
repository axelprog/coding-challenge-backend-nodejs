const express = require('express');

const { wrapSuccessResponse } = require('../utils/ResponseWrapper');
const v1 = require('./v1');

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json(wrapSuccessResponse({
    title: 'StolenBikes'
  }));
});

router.use('/api/v1', v1);

module.exports = router;
