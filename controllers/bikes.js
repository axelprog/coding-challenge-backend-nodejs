const httpStatus = require('http-status');

const { Bike } = require('../models/');
const { debug } = require('../utils/logger');

/**
 * @apiDefine BikeDefine
 * @apiParam (Request body) {String} license Bike license
 * @apiParam (Request body) {String} color Bike color
 * @apiParam (Request body) {String} type Bike type
 * @apiParam (Request body) {Date} stealDate Date of bike stolen
 * @apiParam (Request body) {String} [thiefDescription] Description of thief
 * @apiParam (Request body) {Boolean} [found] Flag of found bike
 * @apiParam (Request body) {Number} [owner] Id of owner
 * @apiParam (Request body) {Number} [handle] Id of seeker

 */

/**
 * @api {OBJECT} Bike Bike
 * @apiVersion 1.0.0
 * @apiGroup .Custom types
 * @apiUse DepartmentDefine
 */

/**
 * @api {post} api/v1/bikes Create
 * @apiDescription Create new record about stolen bike
 * @apiVersion 1.0.0
 * @apiName create bike
 * @apiGroup Bikes
 * @apiPermission public
 *
 * @apiUse BikeDefine
 *
 * @apiSuccess (Success 201) {Number} responseCode     HTTP Response Code
 * @apiSuccess (Success 201) {String} responseMessage  Response message
 * @apiSuccess (Success 201) {Object} response         Response object
 * @apiSuccess {[Bike](#api-_Custom_types-ObjectBike)}  response.bike         Bike
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
      response: { bike: bikeInstance }
    });
  } catch (error) {
    debug('bikeCreate', 'error', error);
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
 * @apiSuccess {[Bike](#api-_Custom_types-ObjectBike)}  response.bike         Bike
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
      response: { bike: bikeInstance }
    });
  } catch (error) {
    debug('bikeGet', 'error', error);
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
 * @apiUse BikeDefine
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 * @apiSuccess {[Bike](#api-_Custom_types-ObjectBike)}  response.bike         Bike
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
      response: { bike: updatedInstance }
    });
  } catch (error) {
    debug('bikeUpdate', 'error', error);
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
    debug('bikeDelete', 'error', error);
    return next(error);
  }
};


/**
 * @api {get} api/v1/bikes/list?limit=:limit&page=:page Get List
 * @apiDescription Get list of bikes with pagination
 * @apiVersion 1.0.0
 * @apiName get list of bikes
 * @apiGroup Bikes
 * @apiPermission public
 *
 * @apiParam {Number} limit record count per page
 * @apiParam {Number} page number of page
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 * @apiSuccess {[Department[]](#api-_Custom_types-ObjectBike)} response.bikes       Response result
 * @apiSuccess {Number} response.page        Response page
 * @apiSuccess {Number} response.limit       Used limit
 * @apiSuccess {Number} response.total       Total users count
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.bikeGetList = async (req, res, next) => {
  try {
    const limit = req.query.limit;
    const offset = ((req.query.page - 1) * req.query.limit) || 0;

    const departmentList = await Bike.findAll({ limit, offset });
    const count = await Bike.count({ });

    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: { bikes: departmentList, page: req.query.page, limit, total: count }
    });
  } catch (error) {
    debug('bikeGetList', 'error', error);
    return next(error);
  }
};
