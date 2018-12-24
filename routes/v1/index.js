const express = require('express');

const router = express.Router();
// const usersRoute = require('./users');
const departmentsRoute = require('./departments');
const bikesRoute = require('./bikes');


// router.use('/users', usersRoute);
router.use('/departments', departmentsRoute);
router.use('/bikes', bikesRoute);


module.exports = router;
