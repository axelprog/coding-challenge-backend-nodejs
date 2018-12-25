const httpStatus = require('http-status');

/**
 * @apiDefine User
 * @apiParam (Request body) {String} firstName User first name
 * @apiParam (Request body) {String} lastName User last naem
 * @apiParam (Request body) {String} email User email for login
 * @apiParam (Request body) {String} password User password
 * @apiParam (Request body) {String="admin","manager","police","user"} role Possible user roles
 */

/**
 * @api {post} api/v1/users Create
 * @apiDescription Create new user
 * @apiVersion 1.0.0
 * @apiName create user
 * @apiGroup Users
 * @apiPermission public
 *
 * @apiUse User
 *
 * @apiSuccess (Success 201) {Number} responseCode     HTTP Response Code
 * @apiSuccess (Success 201) {String} responseMessage  Response message
 * @apiSuccess (Success 201) {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.userCreate = async (req, res, next) => {
  try {
    res.status(httpStatus.CREATED);
    return res.json({
      responseCode: httpStatus.CREATED,
      responseMessage: 'CREATED',
      response: {}
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * @api {get} api/v1/users/:id Get
 * @apiDescription Get an exist user by id
 * @apiVersion 1.0.0
 * @apiName get user data
 * @apiGroup Users
 * @apiPermission public
 *
 * @apiParam {Number} id
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.userGet = async (req, res, next) => {
  try {
    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: {}
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * @api {put} api/v1/users/:id Update
 * @apiDescription Update an exist user data
 * @apiVersion 1.0.0
 * @apiName update user
 * @apiGroup Users
 * @apiPermission public
 *
 * @apiUse User
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.userUpdate = async (req, res, next) => {
  try {
    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: {}
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * @api {delete} api/v1/users/:id Delete
 * @apiDescription Delete an exist user by id
 * @apiVersion 1.0.0
 * @apiName delete user
 * @apiGroup Users
 * @apiPermission public
 *
 * @apiParam {Number} id
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.userDelete = async (req, res, next) => {
  try {
    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: {}
    });
  } catch (error) {
    return next(error);
  }
};
