const httpStatus = require('http-status');
const { Bike } = require('../models/');

/**
 * @apiDefine Bike
 * @apiParam (Request body) {String} license Bike license
 * @apiParam (Request body) {String} color Bike color
 * @apiParam (Request body) {String} type Bike type
 * @apiParam (Request body) {Date} stealDate Date of bike stolen
 * @apiParam (Request body) {String} [thiefDescription] Description of thief
 * @apiParam (Request body) {Boolean} [found] Flag of found bike

 */


/**
 * @api {post} api/v1/bikes Create
 * @apiDescription Create new record about stolen bike
 * @apiVersion 1.0.0
 * @apiName create bike
 * @apiGroup Bikes
 * @apiPermission public
 *
 * @apiUse Bike
 *
 * @apiSuccess (Success 201) {Number} responseCode     HTTP Response Code
 * @apiSuccess (Success 201) {String} responseMessage  Response message
 * @apiSuccess (Success 201) {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.bikeCreate = async (req, res, next) => {
  try {
    const bikeInstance = await Bike.create(req.body);

    // TODO: set owner by logged in user

    res.status(httpStatus.CREATED);
    return res.json({
      responseCode: httpStatus.CREATED,
      responseMessage: 'CREATED',
      response: { bike: bikeInstance.toJSON() }
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * @api {get} api/v1/bikes/:id Get
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
    const bikeInstance = await Bike.findOne({ where: { id: req.params.id } });

    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: { bike: bikeInstance.toJSON() }
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * @api {put} api/v1/bikes/:id Update
 * @apiDescription Update an exist record about stolen bike
 * @apiVersion 1.0.0
 * @apiName update bike
 * @apiGroup Bikes
 * @apiPermission public
 *
 * @apiUse Bike
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.bikeUpdate = async (req, res, next) => {
  try {
    const bikeInstance = await Bike.findOne({ where: { id: req.params.id } });

    const updatedInstance = await bikeInstance.update(req.body);

    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: { bike: updatedInstance.toJSON() }
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * @api {delete} api/v1/bikes/:id Delete
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
    await Bike.destroy({ where: { id: req.params.id }, force: true });

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
