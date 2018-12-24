const httpStatus = require('http-status');

/**
 * @apiDefine User
 * @apiParam (Request body) {String} firstName
 * @apiParam (Request body) {String} lastName
 * @apiParam (Request body) {String} email
 * @apiParam (Request body) {String} password
 * @apiParam (Request body) {String="admin","manager","police","user"} role
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
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.userCreate = async (req, res, next) => {
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
