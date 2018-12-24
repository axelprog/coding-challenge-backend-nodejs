const httpStatus = require('http-status');


/**
 * @api {post} api/v1/bikes Create record
 * @apiDescription Create new record about stolen bike
 * @apiVersion 1.0.0
 * @apiName create bike
 * @apiGroup Bikes
 * @apiPermission public
 *
 * @apiParam (Request body) {String} license
 * @apiParam (Request body) {String} color
 * @apiParam (Request body) {String} type
 * @apiParam (Request body) {Date} stealDate
 * @apiParam (Request body) {String} [thiefDescription]
 * @apiParam (Request body) {Boolean} [found]
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.bikeCreate = async (req, res, next) => {
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
 * @api {get} api/v1/bikes/:id Get record
 * @apiDescription Get an exist record about stolen bike by id
 * @apiVersion 1.0.0
 * @apiName get bike data
 * @apiGroup Bikes
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

exports.bikeGet = async (req, res, next) => {
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
 * @api {put} api/v1/bikes/:id Update record
 * @apiDescription Update an exist record about stolen bike
 * @apiVersion 1.0.0
 * @apiName update bike
 * @apiGroup Bikes
 * @apiPermission public
 *
 * @apiParam (Request body) {String} [license]
 * @apiParam (Request body) {String} [color]
 * @apiParam (Request body) {String} [type]
 * @apiParam (Request body) {Date} [stealDate]
 * @apiParam (Request body) {String} [thiefDescription]
 * @apiParam (Request body) {Boolean} [found]
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.bikeUpdate = async (req, res, next) => {
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
 * @api {delete} api/v1/bikes/:id Delete record
 * @apiDescription Delete an exist record about stolen bike by bike id
 * @apiVersion 1.0.0
 * @apiName delete bike
 * @apiGroup Bikes
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

exports.bikeDelete = async (req, res, next) => {
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
