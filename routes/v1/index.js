const express = require('express');

const router = express.Router();
const bikesRoute = require('./bikes');
// const usersRoute = require('./users');
// const departmentsRoute = require('./departments');


router.use('/bikes', bikesRoute);
// router.use('/users', usersRoute);
// router.use('/departments', departmentsRoute);


module.exports = router;
